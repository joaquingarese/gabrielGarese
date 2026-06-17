import BlockContent from '@sanity/block-content-to-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiCow, GiBull } from 'react-icons/gi';
import { MdLocationOn, MdOutlineAgriculture, MdForest } from 'react-icons/md';

import ImageGallery from '../UIElements/ImageGallery';
import MiniForm from '../forms/MiniForm';

const specialityMap: Record<string, { label: string; icon: React.ReactNode }> = {
  agriculture: { label: 'Agrícola', icon: <MdOutlineAgriculture size={16} /> },
  milking: { label: 'Tambo', icon: <GiCow size={16} /> },
  cattle: { label: 'Ganadero', icon: <GiBull size={16} /> },
  forestry: { label: 'Forestal', icon: <MdForest size={16} /> }
};

function FarmView({ farm }: { farm: Farm2 }) {
  const [imagesSt, setImagesSt] = useState<string[]>([]);

  useEffect(() => {
    const imageURLS = [farm.image.asset.url];

    farm.gallery?.forEach((item) => {
      imageURLS.push(item.image.asset.url);
    });

    setImagesSt(imageURLS);
  }, [farm.gallery, farm.image.asset.url]);

  const location = farm.state?.name || farm.country.name;
  const totalPrice = farm.price > 0 ? farm.price * farm.size : 0;

  return (
    <section className="bg-bodyBackground">
      <div className="mx-auto w-full max-w-8xl px-5 pb-16 pt-8 md:pt-12 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 font-navbar text-xs uppercase tracking-[0.14em] text-tertiary">
          <Link href="/">
            <a className="transition-colors hover:text-primary">Inicio</a>
          </Link>
          <span className="text-lightBrown">/</span>
          <Link href="/campos">
            <a className="transition-colors hover:text-primary">Campos</a>
          </Link>
          <span className="text-lightBrown">/</span>
          <span className="text-secondary">{farm.country.name}</span>
          {farm.state?.name && (
            <>
              <span className="text-lightBrown">/</span>
              <span className="text-secondary">{farm.state.name}</span>
            </>
          )}
        </nav>

        {/* Title + price header */}
        <header className="flex flex-col gap-5 border-b border-lightBrown pb-7 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-tierra px-3 py-1 font-navbar text-[11px] font-semibold uppercase tracking-[0.16em] text-cream">
                {farm.transaction === 'sell' ? 'En venta' : 'En arriendo'}
              </span>
              {farm.specialities.map((speciality) => {
                const entry = specialityMap[speciality as string];
                if (!entry) return null;
                return (
                  <span
                    key={speciality}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 font-navbar text-xs font-medium text-tertiary"
                  >
                    <span className="text-primary">{entry.icon}</span>
                    {entry.label}
                  </span>
                );
              })}
            </div>
            <h1 className="font-volte text-3xl font-semibold leading-tight text-tierra md:text-4xl">
              {farm.name}
            </h1>
            <div className="mt-2.5 flex items-center gap-1.5 font-body text-sm text-tertiary">
              <MdLocationOn size={18} className="shrink-0 text-primary" />
              {farm.country.name}
              {farm.state?.name && ` · ${farm.state.name}`}
            </div>
          </div>

          <div className="shrink-0 md:text-right">
            {farm.price > 0 ? (
              <>
                <span className="block font-volte text-3xl font-semibold text-primary">
                  USD {totalPrice.toLocaleString('es-UY')}
                </span>
                <span className="font-body text-sm text-caqui">
                  {farm.price.toLocaleString('es-UY')} USD/ha
                </span>
              </>
            ) : (
              <Link href={{ pathname: `/contacto`, query: { name: farm.name, type: farm._type } }}>
                <a className="font-navbar text-base font-semibold uppercase tracking-[0.08em] text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline">
                  Consúltenos el precio
                </a>
              </Link>
            )}
          </div>
        </header>

        {/* Gallery + sidebar */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] lg:gap-10">
          <div className="min-w-0">
            <ImageGallery images={imagesSt} />

            {/* Key facts */}
            <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border border-lightBrown bg-white sm:grid-cols-4">
              <Fact label="Superficie" value={`${farm.size} ha`} />
              <Fact
                label="Precio / ha"
                value={farm.price > 0 ? `USD ${farm.price.toLocaleString('es-UY')}` : 'A consultar'}
              />
              <Fact label="Operación" value={farm.transaction === 'sell' ? 'Venta' : 'Arriendo'} />
              <Fact label="Ubicación" value={location} />
            </dl>

            {/* Description */}
            <div className="mt-10 max-w-3xl">
              <SectionTitle eyebrow="La propiedad">Descripción</SectionTitle>
              <p className="mt-3 whitespace-pre-line font-body leading-relaxed text-tertiary">
                {farm.description}
              </p>
            </div>

            {/* Detail */}
            {farm.detail && (
              <div className="mt-10 max-w-3xl">
                <SectionTitle eyebrow="Ficha técnica">Detalle</SectionTitle>
                <div className="mt-3 font-body leading-relaxed text-tertiary [&_a]:text-primary [&_a]:underline [&_h2]:mt-5 [&_h2]:font-header [&_h2]:text-lg [&_h2]:text-tierra [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-3 [&_ul]:mb-3">
                  <BlockContent blocks={farm.detail} />
                </div>
              </div>
            )}
          </div>

          <aside className="lg:relative">
            <div className="lg:sticky lg:top-36">
              <MiniForm type={'farm'} property={farm} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-r border-lightBrown p-4 last:border-r-0 sm:border-b-0">
      <dt className="font-navbar text-[11px] uppercase tracking-[0.14em] text-caqui">{label}</dt>
      <dd className="mt-1 font-body text-base font-semibold text-tierra">{value}</dd>
    </div>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-3">
        <span className="fence-line block w-10 text-primary" aria-hidden="true" />
        <span className="font-navbar text-xs uppercase tracking-[0.24em] text-secondary">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-header text-2xl text-tierra">{children}</h2>
    </div>
  );
}

export default FarmView;
