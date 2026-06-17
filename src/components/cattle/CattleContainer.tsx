import Link from 'next/link';

import Cattle from '../cattle/Cattle';

interface CattleContainerProps {
  cattles: CattleType[];
}

const CattleContainer = ({ cattles }: CattleContainerProps) => {
  return (
    <div className="mx-auto mb-20 max-w-5xl px-5 pt-6">
      {cattles.length > 0 ? (
        cattles.map((cattle) => <Cattle key={cattle._id} cattle={cattle} />)
      ) : (
        <div className="rounded-xl border border-dashed border-lightBrown bg-white/60 px-6 py-16 text-center">
          <p className="font-header text-lg text-tierra">No hay ganado en oferta por el momento.</p>
          <p className="mx-auto mt-2 max-w-md font-body text-sm text-tertiary">
            Cuéntenos qué está buscando y le avisamos apenas ingrese nueva hacienda.
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

export default CattleContainer;
