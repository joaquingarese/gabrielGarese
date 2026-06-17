import CattleContainer from './CattleContainer';

interface cattleDetailsProps {
  cattles: CattleType[];
}

const Cattles = ({ cattles }: cattleDetailsProps) => {
  return (
    <section className="bg-bodyBackground">
      <div className="mx-auto max-w-5xl px-5 pt-10 md:pt-14">
        <div className="mb-3 flex items-center gap-3">
          <span className="fence-line block w-12 text-primary" aria-hidden="true" />
          <span className="font-navbar text-xs uppercase tracking-[0.28em] text-secondary">
            Hacienda en oferta
          </span>
        </div>
        <h1 className="font-volte text-3xl font-semibold leading-tight text-tierra md:text-4xl">
          Ganado
        </h1>
        {cattles.length > 0 && (
          <p className="mt-2 font-body text-sm text-tertiary">
            {cattles.length} {cattles.length === 1 ? 'lote disponible' : 'lotes disponibles'}
          </p>
        )}
      </div>
      <CattleContainer cattles={cattles} />
    </section>
  );
};

export default Cattles;
