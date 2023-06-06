import React from 'react';
import Cattles from '~/components/cattle/Cattles';
import { createClient } from 'next-sanity';
import { getClient } from '~/lib/sanity.server';
import cattleQuery from '~/queries/cattle';
import { CattleType } from '~/pages/types';

interface cattleDetailsProps {
  cattle: CattleType[];
}

const ganado = ({ cattle }: cattleDetailsProps) => {
  console.log(cattle);

  return (
    <>
      <Cattles cattle={cattle} />
    </>
  );
};

export async function getStaticProps() {
  const cattle = await getClient().fetch(cattleQuery);

  return {
    props: {
      cattle: cattle.cattle || []
    }
  };
}

export default ganado;
