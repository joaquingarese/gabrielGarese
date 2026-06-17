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
      <div className="2xs:container mx-auto px-5 pt-10 md:pt-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="fence-line block w-12 text-primary" aria-hidden="true" />
              <span className="font-navbar text-xs uppercase tracking-[0.28em] text-secondary">
                Campos disponibles
              </span>
            </div>
            <h1 className="font-volte text-3xl font-semibold leading-tight text-tierra md:text-4xl">
              Campos en {location}
            </h1>
            <p className="mt-2 font-body text-sm text-tertiary">
              {stateFarms.length}{' '}
              {stateFarms.length === 1 ? 'propiedad disponible' : 'propiedades disponibles'}
            </p>
          </div>
          {location === 'Uruguay' && (
            <div className="md:pb-1">
              <Selector
                selectedState={selectedState}
                setSelectedState={setSelectedState}
                cities={statesArray}
              />
            </div>
          )}
        </div>
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
