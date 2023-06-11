import React from 'react';
import Houses from '~/components/houses/Houses';
import { getClient } from '~/lib/sanity.server';
import housesQuery from '~/queries/houses';
import { House2 } from '~/pages/types';

interface PropiedadesProps {
  houses: House2[];
}

const Propiedades = ({ houses }: PropiedadesProps) => {
  return (
    <>
      <Houses houses={houses} />{' '}
    </>
  );
};

export async function getStaticProps() {
  const houses = await getClient().fetch(housesQuery);

  return {
    props: {
      houses: houses.houses || []
    }
  };
}

export default Propiedades;
