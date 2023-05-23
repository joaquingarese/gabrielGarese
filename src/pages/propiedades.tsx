import React from 'react';
import Houses from '~/components/houses/Houses';
import { createClient } from 'next-sanity';
import { House2 } from '~/pages/types';

const client = createClient({
  projectId: 'c7nn4dit',
  dataset: 'production',
  apiVersion: '2022-05-15',
  useCdn: false
});

interface PropiedadesProps {
  houses: Array<House2>;
}

const Propiedades = ({ houses }: PropiedadesProps) => {
  return (
    <>
      <Houses houses={houses} />
    </>
  );
};

export async function getStaticProps() {
  const houses = await client.fetch(`*[_type == "houses"]`);

  return {
    props: {
      houses
    }
  };
}

export default Propiedades;
