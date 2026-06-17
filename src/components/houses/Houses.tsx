import HouseContainer from './HouseContainer';

interface PropertiesProps {
  houses: House2[];
}

const Houses = ({ houses }: PropertiesProps) => {
  return (
    <section className="bg-bodyBackground">
      <div className="mx-auto max-w-5xl px-5 pt-10 md:pt-14">
        <div className="mb-3 flex items-center gap-3">
          <span className="fence-line block w-12 text-primary" aria-hidden="true" />
          <span className="font-navbar text-xs uppercase tracking-[0.28em] text-secondary">
            Casas y terrenos
          </span>
        </div>
        <h1 className="font-volte text-3xl font-semibold leading-tight text-tierra md:text-4xl">
          Propiedades
        </h1>
        {houses.length > 0 && (
          <p className="mt-2 font-body text-sm text-tertiary">
            {houses.length} {houses.length === 1 ? 'propiedad disponible' : 'propiedades disponibles'}
          </p>
        )}
      </div>
      <HouseContainer houses={houses} />
    </section>
  );
};

export default Houses;
