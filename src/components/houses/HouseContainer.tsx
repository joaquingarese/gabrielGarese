import Link from 'next/link';

import House from '../houses/House';

interface HouseContainerProps {
  houses: House2[];
}

const HouseContainer = ({ houses }: HouseContainerProps) => {
  return (
    <div className="mx-auto mb-20 max-w-5xl px-5 pt-6">
      {houses.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {houses.map((house) => (
            <House key={house._id} house={house} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-lightBrown bg-white/60 px-6 py-16 text-center">
          <p className="font-header text-lg text-tierra">
            No hay propiedades disponibles por el momento.
          </p>
          <p className="mx-auto mt-2 max-w-md font-body text-sm text-tertiary">
            Cuéntenos qué está buscando y le avisamos apenas ingrese una nueva propiedad.
          </p>
          <Link href="/contacto">
            <a className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-navbar text-sm font-semibold uppercase tracking-[0.1em] text-tierra transition-colors hover:bg-secondary hover:text-cream">
              Contáctenos
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HouseContainer;
