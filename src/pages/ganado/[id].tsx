import React from 'react';
import CattleView from '~/components/cattle/CattleView';
import { getClient } from '~/lib/sanity.server';
import { GetStaticPropsContext } from 'next';
import { cattleById } from '~/queries/cattleById';

interface CattleDetailsProps {
  cattle: CattleType;
}

function CattleDetails({ cattle }: CattleDetailsProps) {
  return (
    <>
      <CattleView cattle={cattle} />
    </>
  );
}

export async function getStaticPaths() {
  const cattleIds = await getClient().fetch('*[_type == "cattle"]._id');

  const paths = cattleIds.map((id: string) => ({
    params: { id }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as { id: string };

  const cattle = await getClient().fetch(cattleById(id));

  return {
    props: {
      cattle: cattle[0] || null
    },
    revalidate: 60
  };
}

export default CattleDetails;
