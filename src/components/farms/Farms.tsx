import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const countries = [
  {
    href: '/location/Uruguay',
    name: 'Uruguay',
    map: '/images/uruguayMarron3.png',
    desc: 'Estancias, chacras y fracciones en todo el país.'
  },
  {
    href: '/location/Paraguay',
    name: 'Paraguay',
    map: '/images/paraguay6.png',
    desc: 'Campos ganaderos y agrícolas en la región.'
  }
];

const Farms = () => {
  return (
    <section className="bg-bodyBackground">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-10 md:pt-14">
        {/* Header */}
        <div className="mb-10 max-w-2xl md:mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="fence-line block w-12 text-primary" aria-hidden="true" />
            <span className="font-navbar text-xs uppercase tracking-[0.28em] text-secondary">
              Elija un país
            </span>
          </div>
          <h1 className="font-volte text-3xl font-semibold leading-tight text-tierra md:text-4xl">
            Campos en Uruguay y Paraguay
          </h1>
          <p className="mt-3 font-body text-base leading-relaxed text-tertiary">
            Explore nuestra cartera de campos por país y filtre luego por localidad.
          </p>
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {countries.map(({ href, name, map, desc }) => (
            <Link href={href} key={name}>
              <article
                role="button"
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-lightBrown/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-primary-soft/60 to-cream p-10">
                  <div className="relative h-full w-full">
                    <Image
                      src={map}
                      alt={`Mapa de ${name}`}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-volte text-2xl font-semibold text-tierra transition-colors group-hover:text-primary">
                    {name}
                  </h2>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-tertiary">{desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-navbar text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    Ver campos
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Farms;
