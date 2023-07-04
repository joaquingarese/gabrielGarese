import React from 'react';
import HouseView from '~/components/houses/HouseView';
import { getClient } from '~/lib/sanity.server';
import { GetStaticPropsContext } from 'next';
import { houseById } from '~/queries/houseById';

interface HouseDetailsProps {
  house: House2;
}

function HouseDetails({ house }: HouseDetailsProps) {
  return (
    <>
      <HouseView house={house} />
    </>
  );
}

export async function getStaticPaths() {
  const houseIds = await getClient().fetch('*[_type == "cattle"]._id');

  const paths = houseIds.map((id: string) => ({
    params: { id }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as { id: string };

  const house = await getClient().fetch(houseById(id));

  return {
    props: {
      house: house[0] || null
    },
    revalidate: 60
  };
}

export default HouseDetails;
