import React from 'react';
import Navbar from '~/components/globals/Navbar';
import PropertiesContainer from '~/components/propertiesContainer/PropertiesContainer';
import Footer from '~/components/globals/Footer';
import Selector from '~/components/tools/Selector';
import { useRouter } from 'next/router';
import { useState } from 'react';

function farmsFromLocation() {
  const [selectedCity, setSelectedCity] = useState('');
  const router = useRouter();
  const { location } = router.query;

  const cities = ['Florida', 'Artigas', 'Soriano', 'Salto', 'Maldonado', 'Montevideo'];
  const capitalizedLocation =
    typeof location === 'string' ? location.charAt(0).toUpperCase() + location.slice(1) : '';

  return (
    <>
      <div className="flex flex-col md:flex-row container">
        <h3 className="text-2xl md:text-3xl mb-10 font-title inline mt-5">
          Campos de {capitalizedLocation}:
        </h3>
        <div className="md:ml-auto w-1/2 md:w-1/4 mb-6 flex md:mt-5">
          <Selector selectedCity={selectedCity} setSelectedCity={setSelectedCity} cities={cities} />
        </div>
      </div>
      <PropertiesContainer propertyType={'farm'} />
    </>
  );
}

export default farmsFromLocation;
