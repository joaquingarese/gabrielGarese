import Farm from '../farms/Farm';

interface FarmContainerProps {
  properties: Farm2[];
}

const FarmContainer = ({ properties }: FarmContainerProps) => {
  return (
    <div className="2xs:container font-navbar mb-16 3xs:p-3 p-0">
      {properties.length > 0 ? (
        properties.map((property, index) => <Farm key={index} property={property} />)
      ) : (
        <p className="text-primary text-xl">
          Por el momento no contamos con campos para mostrar...
        </p>
      )}
    </div>
  );
};

export default FarmContainer;
