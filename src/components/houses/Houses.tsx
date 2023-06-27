import React from 'react';
import HouseContainer from './HouseContainer';

interface PropertiesProps {
  houses: House2[];
}

const Houses = ({ houses }: PropertiesProps) => {
  return (
    <>
      <div className="2xs:container mt-24 md:mt-10 flex-column 3xs:p-2">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 font-medium">PROPIEDADES</h2>
        <p className="font-navbar mt-4 xs:w-3/4 lg:w-1/3 text-textNotes font-thin">
          Seleccione localidad:
        </p>
        <HouseContainer houses={houses} />
      </div>
    </>
  );
};

export default Houses;
