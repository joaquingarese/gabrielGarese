import React, { useState, useEffect } from 'react';
import PropertiesContainer from '../propertiesContainer/PropertiesContainer';

function Properties() {
  return (
    <>
      <div className="container mt-1 flex-column">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 font-medium">PROPIEDADES</h2>
        <p className="font-navbar mt-4  xs:w-3/4  lg:w-1/3 text-textNotes font-thin">
          Seleccione localidad:
        </p>
        <PropertiesContainer propertyType={'house'} />
      </div>
    </>
  );
}

export default Properties;
