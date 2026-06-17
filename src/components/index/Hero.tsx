import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const categories = [
  { href: '/campos', label: 'Campos', desc: 'Estancias y fracciones, por hectárea' },
  { href: '/ganado', label: 'Ganado', desc: 'Hacienda y reproductores' },
  { href: '/propiedades', label: 'Propiedades', desc: 'Venta y alquiler' }
];

function Hero() {
  return (
    <section className="relative flex min-h-[82vh] flex-col justify-between overflow-hidden xl:min-h-[86vh]">
      {/* Background: the Uruguayan campo from above — the literal product */}
      <div className="absolute inset-0">
        <Image
          src="/images/campoHero2.webp"
          alt="Vista aérea de un campo en Uruguay"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="object-center"
        />
        {/* Legibility scrims, in the brand earth tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-tierra/90 via-tierra/55 to-tierra/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-tierra/85 via-transparent to-tierra/30" />
      </div>

      {/* Headline block */}
      <div className="relative z-10 flex flex-grow items-center">
        <div className="2xs:container mx-auto w-full px-6">
          <div className="max-w-2xl py-16">
            <div className="fade-up fade-up-1 mb-6 flex items-center gap-3">
              <span className="fence-line block w-12 text-primary" aria-hidden="true" />
              <span className="font-navbar text-xs uppercase tracking-[0.28em] text-cream/90">
                Negocios rurales · Uruguay y la región
              </span>
            </div>

            <h1 className="fade-up fade-up-2 font-volte text-[1.5rem] font-semibold leading-[1.15] text-cream break-words xs:text-4xl sm:text-5xl sm:leading-[1.08] xl:text-6xl">
              Compra y venta de campos, ganado y{' '}
              <span className="font-header font-normal italic text-primary-soft">propiedades</span>.
            </h1>

            <p className="fade-up fade-up-3 mt-6 max-w-xl font-body text-base leading-relaxed text-cream/80 sm:text-lg">
              Lo acompañamos en cada operación con conocimiento real del terreno — de la primera
              recorrida al cierre del negocio.
            </p>

            <div className="fade-up fade-up-4 mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contacto">
                <a className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-navbar text-sm font-semibold uppercase tracking-[0.12em] text-tierra shadow-lg transition-colors hover:bg-secondary hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">
                  Contáctenos
                  <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
              <Link href="/campos">
                <a className="inline-flex items-center gap-2 border border-cream/40 px-7 py-3.5 font-navbar text-sm font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:border-cream hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">
                  Ver campos
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category strip — the three things the brokerage actually moves */}
      <div className="relative z-10 border-t border-cream/15 bg-tierra/30 backdrop-blur-sm">
        <div className="2xs:container mx-auto px-6">
          <div className="grid grid-cols-1 divide-y divide-cream/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {categories.map(({ href, label, desc }) => (
              <Link href={href} key={href}>
                <a className="group flex items-center justify-between gap-4 py-6 transition-colors hover:bg-cream/5 sm:px-8 sm:first:pl-0 sm:last:pr-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary">
                  <span>
                    <span className="block font-volte text-2xl font-medium text-cream transition-colors group-hover:text-primary-soft">
                      {label}
                    </span>
                    <span className="mt-1 block font-body text-sm text-cream/60">{desc}</span>
                  </span>
                  <HiArrowRight className="shrink-0 text-xl text-primary transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
