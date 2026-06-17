import Farm from '../farms/Farm';

interface FarmContainerProps {
  properties: Farm2[];
}

const FarmContainer = ({ properties }: FarmContainerProps) => {
  return (
    <div className="2xs:container mx-auto mb-20 px-4 pt-2">
      <div className="mx-auto max-w-5xl">
        {properties.length > 0 ? (
          properties.map((property, index) => <Farm key={index} property={property} />)
        ) : (
          <div className="rounded-xl border border-dashed border-lightBrown bg-white/60 px-6 py-16 text-center">
            <p className="font-header text-lg text-tierra">
              No hay campos disponibles en esta zona por el momento.
            </p>
            <p className="mt-2 font-body text-sm text-tertiary">
              Escríbanos y le avisamos apenas ingrese uno nuevo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmContainer;
