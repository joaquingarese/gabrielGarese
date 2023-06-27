import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import FarmView from '~/components/farms/FarmView';
import { getClient } from '~/lib/sanity.server';
import { GetStaticPropsContext } from 'next';
import { farmById } from '~/queries/farmById';

function FarmDetails({ farm }: { farm: Farm2 }) {
  return (
    <>
      <FarmView farm={farm} />
    </>
  );
}

export async function getStaticPaths() {
  const farmIds = await getClient().fetch('*[_type == "farm"]._id');

  const paths = farmIds.map((id: string) => ({
    params: { id }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as { id: string };

  const farm = await getClient().fetch(farmById(id));

  return {
    props: {
      farm: farm[0] || null
    },
    revalidate: 60
  };
}

export default FarmDetails;
