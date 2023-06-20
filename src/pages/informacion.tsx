import React from 'react';
import Information from '~/components/information/Information';
import { getClient } from '~/lib/sanity.server';
import informationQuery from '~/queries/informationQuery';

interface informationProps {
  farms: Farm2[];
}

function informacion({ information }) {
  return (
    <div className="">
      <Information />
    </div>
  );
}
export async function getStaticProps() {
  const information = await getClient().fetch(informationQuery);

  return {
    props: {
      information: information.information || []
    }
  };
}

export default informacion;
