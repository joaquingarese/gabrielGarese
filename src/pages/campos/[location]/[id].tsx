import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import FarmView from '~/components/farms/FarmView';
import { getClient } from '~/lib/sanity.server';
import { GetStaticPropsContext } from 'next';
import { Farm2 } from '~/pages/types';
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

  console.log(farmIds);

  // construct paths with params (the object keys should match dynamic route names)
  const paths = farmIds.map((id: string) => ({
    params: { id }
  }));

  return { paths, fallback: 'blocking' };
}

// fetch individual farm data
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
