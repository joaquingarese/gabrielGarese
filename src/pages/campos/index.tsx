import React from 'react';
import PropertiesContainer from '~/components/propertiesContainer/PropertiesContainer';
import Selector from '~/components/tools/Selector';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { createClient } from 'next-sanity';
import { Farm2 } from '~/pages/types';

const client = createClient({
  projectId: 'c7nn4dit',
  dataset: 'production',
  apiVersion: '2022-05-15',
  useCdn: false
});

interface farmsFromLocationProps {
  farms: Array<Farm2>;
}

const farmsFromLocation = ({ farms }: farmsFromLocationProps) => {
  console.log('farms');

  return (
    <>
      <div className="flex flex-col md:flex-row container">
        <h3 className="text-2xl md:text-3xl mb-10 font-title inline mt-5">Campos de xxxx</h3>
        <div className="md:ml-auto w-1/2 md:w-1/4 mb-6 flex md:mt-5">
          {/* <Selector selectedCity={selectedCity} setSelectedCity={setSelectedCity} cities={cities} /> */}
        </div>
      </div>
      <PropertiesContainer propertyType={'farm'} properties={farms} />
    </>
  );
};

export async function getStaticProps() {
  const farms = await client.fetch(`*[_type == "farms"]`);
  return {
    props: {
      farms
    }
  };
}

export default farmsFromLocation;
