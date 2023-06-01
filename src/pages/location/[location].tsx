import React from 'react';
import PropertiesContainer from '~/components/propertiesContainer/PropertiesContainer';
import Selector from '~/components/tools/Selector';
import { getClient } from '~/lib/sanity.server';
import { GetStaticPropsContext } from 'next';
import { Farm2 } from '~/pages/types';
import { farmByLocation } from '~/queries/farmByLocation';

interface farmsFromLocationProps {
  farms: Array<Farm2>;
  location: string;
}

const farmsFromLocation = ({ farms, location }: farmsFromLocationProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row container">
        <h3 className="text-2xl md:text-3xl mb-10 font-title inline mt-5">Campos de {location}</h3>
        <div className="md:ml-auto w-1/2 md:w-1/4 mb-6 flex md:mt-5">
          {/* <Selector selectedCity={selectedCity} setSelectedCity={setSelectedCity} cities={cities} /> */}
        </div>
      </div>
      <PropertiesContainer propertyType={'farm'} properties={farms} />
    </>
  );
};

export async function getStaticPaths() {
  const farms = await getClient().fetch('*[_type == "farms"].country->name');
  const countryNames = Array.from(new Set<string>(farms));

  const paths = countryNames.map((name: string) => ({
    params: { location: name }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { location } = context.params as { location: string };

  const farms = await getClient().fetch(farmByLocation(location), { location });

  return {
    props: {
      farms,
      location
    },
    revalidate: 60
  };
}

export default farmsFromLocation;
