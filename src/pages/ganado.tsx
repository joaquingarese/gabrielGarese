import React from 'react';
import Cattles from '~/components/cattle/Cattles';
import { createClient } from 'next-sanity';
import { CattlesType } from './types';

const client = createClient({
  projectId: 'c7nn4dit',
  dataset: 'production',
  apiVersion: '2022-05-15',
  useCdn: false
});

interface CattleProps {
  cattles: Array<CattlesType>;
}

const ganado = ({ cattles }: CattleProps) => {
  return (
    <>
      <Cattles cattles={cattles} />
    </>
  );
};

export async function getStaticProps() {
  const cattles = await client.fetch(`*[_type == "cattles"]`);

  return {
    props: {
      cattles
    }
  };
}

export default ganado;
