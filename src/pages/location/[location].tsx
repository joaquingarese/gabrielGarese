import { GetStaticPropsContext } from 'next';
import React, { useEffect, useState } from 'react';

import Selector from '~/components/UIElements/Selector';
import FarmContainer from '~/components/farms/FarmContainer';
import { getClient } from '~/lib/sanity.server';
import { farmByLocation } from '~/queries/farmByLocation';
import { farmsByState } from '~/queries/selector/farmByState';

interface farmsFromLocationProps {
  farms: Array<Farm2>;
  location: string;
  states: { name: string; _id: string }[];
}

const FarmsFromLocation = ({ farms, location, states }: farmsFromLocationProps) => {
  const [statesArray, setStatesArray] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [stateFarms, setStateFarms] = useState<Farm2[]>(farms);
  const [stateObject, setStateObject] = useState<Record<string, string>>({});

  useEffect(() => {
    setStatesArray(states.map((state) => state.name));
    const initialStateObject: Record<string, string> = {};
    states.forEach((state) => {
      initialStateObject[state.name] = state._id;
    });
    setStateObject(initialStateObject);
    setStateFarms(farms);
  }, [farms, states]);

  useEffect(() => {
    async function stateFarms() {
      try {
        if (selectedState) {
          const farms = await getClient().fetch(farmsByState(stateObject[selectedState]));
          // setStateFarms(farms);
          if (Array.isArray(farms)) {
            // Make sure that each item in the array is of the expected type
            const validFarms: Farm2[] = farms.filter((farm): farm is Farm2 => {
              return (farm as Farm2) && typeof farm === 'object';
            });
            setStateFarms(validFarms);
          }
        }
      } catch (error) {
        console.error(error);
        // Handle the error appropriately here
      }
    }

    stateFarms().catch((error) => {
      console.error('Error fetching farms:', error);
    });
  }, [selectedState, stateObject]);

  return (
    <>
      <div className="flex flex-col md:flex-row 2xs:container 3xs:p-5 p-0">
        <h3 className="text-2xl md:text-3xl mb-0 md:mb-10 font-title inline mt-24 md:mt-5">
          Campos en {location}
        </h3>
        {location === 'Uruguay' && (
          <div className="md:ml-auto w-1/2 md:w-1/4 mb-6 flex mt-4 md:mt-5">
            <Selector
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              cities={statesArray}
            />
          </div>
        )}
      </div>
      <FarmContainer properties={stateFarms} />
    </>
  );
};

export async function getStaticPaths() {
  const farms: string[] = await getClient().fetch('*[_type == "farms"].country->name');
  const countryNames = Array.from(new Set<string>(farms));

  const paths = countryNames.map((name: string) => ({
    params: { location: name }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { location } = context.params as { location: string };

  const farms = await getClient().fetch(farmByLocation(), { location });
  const states = await getClient().fetch(`*[_type == "states"]`);

  return {
    props: {
      farms,
      location,
      states
    },
    revalidate: 60
  };
}

export default FarmsFromLocation;
