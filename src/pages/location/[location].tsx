import React, { useEffect, useState } from 'react';
import FarmContainer from '~/components/farms/FarmContainer';
import Selector from '~/components/UIElements/Selector';
import { getClient } from '~/lib/sanity.server';
import { GetStaticPropsContext } from 'next';
import { farmByLocation } from '~/queries/farmByLocation';
import { farmsByState } from '~/queries/selector/farmByState';

interface farmsFromLocationProps {
  farms: Array<Farm2>;
  location: string;
  states: { name: string; _id: string }[];
}

const farmsFromLocation = ({ farms, location, states }: farmsFromLocationProps) => {
  const [statesArray, setStatesArray] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [stateFarms, setStateFarms] = useState(farms);
  const [stateObject, setStateObject] = useState<Record<string, string>>({});
  console.log(stateFarms);
  console.log(selectedState);

  useEffect(() => {
    setStatesArray(states.map((state) => state.name));
    let initialStateObject: Record<string, string> = {};
    states.forEach((state) => {
      initialStateObject[state.name] = state._id;
    });
    setStateObject(initialStateObject);
  }, []);

  useEffect(() => {
    async function stateFarms() {
      setStateFarms(await getClient().fetch(farmsByState(stateObject[selectedState])));
    }
    stateFarms();
  }, [selectedState]);

  return (
    <>
      <div className="flex flex-col md:flex-row 2xs:container 3xs:p-5 p-0">
        <h3 className="text-2xl md:text-3xl mb-0 md:mb-10 font-title inline mt-24 md:mt-5">
          Campos de {location}
        </h3>
        <div className="md:ml-auto w-1/2 md:w-1/4 mb-6 flex md:mt-5">
          <Selector
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            cities={statesArray}
          />
        </div>
      </div>
      <FarmContainer properties={farms} />
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

export default farmsFromLocation;
