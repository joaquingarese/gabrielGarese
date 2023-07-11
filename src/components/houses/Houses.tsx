import HouseContainer from './HouseContainer';

interface PropertiesProps {
  houses: House2[];
}

const Houses = ({ houses }: PropertiesProps) => {
  return (
    <>
      <div className="2xs:container mt-24 md:mt-10 flex-column 3xs:p-2">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 font-medium">PROPIEDADES</h2>
        <HouseContainer houses={houses} />
      </div>
    </>
  );
};

export default Houses;
