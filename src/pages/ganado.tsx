import React from 'react';
import Cattles from '~/components/cattle/Cattles';
import { createClient } from 'next-sanity';
import { getClient } from '~/lib/sanity.server';
import cattleQuery from '~/queries/cattle';

interface cattleDetailsProps {
  cattles: CattleType[];
}

const ganado = ({ cattles }: cattleDetailsProps) => {
  return (
    <>
      <Cattles cattles={cattles} />
    </>
  );
};

export async function getStaticProps() {
  const cattles = await getClient().fetch(cattleQuery);

  return {
    props: {
      cattles: cattles.cattle || []
    }
  };
}

export default ganado;
