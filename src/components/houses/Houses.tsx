import React, { useState, useEffect } from 'react';
import PropertiesContainer from '../propertiesContainer/PropertiesContainer';
import { House2 } from '~/pages/types';

interface PropertiesProps {
  houses: Array<House2>;
}

// function Properties({ houses }) {
const Houses = ({ houses }: PropertiesProps) => {
  console.log('A ver si trae las casas');
  console.log(houses);
  return (
    <>
      <div className="container mt-32 md:mt-10 flex-column">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 font-medium">PROPIEDADES</h2>
        <p className="font-navbar mt-4  xs:w-3/4  lg:w-1/3 text-textNotes font-thin">
          Seleccione localidad:
        </p>
        <PropertiesContainer propertyType={'house'} properties={houses} />
      </div>
    </>
  );
};

export default Houses;
