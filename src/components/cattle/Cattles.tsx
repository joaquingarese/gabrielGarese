import React, { useState, useEffect } from 'react';
import PropertiesContainer from '../propertiesContainer/PropertiesContainer';
import Link from 'next/link';
import { createClient } from 'next-sanity';
import { CattlesType } from '~/pages/types';

// const client = createClient({
//   projectId: 'c7nn4dit',
//   dataset: 'production',
//   apiVersion: '2022-05-15',
//   useCdn: false
// });

interface cattleProps {
  cattles: Array<CattlesType>;
}

const Cattles = ({ cattles }: cattleProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 800);
  }, []);

  return (
    <>
      <div className="container mt-28 md:mt-10 flex-column">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 font-medium">GANADO</h2>
        <section className="mb-10 mt-5">
          <div className="flex justify-center"></div>
        </section>
        <PropertiesContainer propertyType={'cattle'} properties={cattles} />
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const farms = await client.fetch(`*[_type == "farms"]`);

//   return {
//     props: {
//       farms
//     }
//   };
// }

export default Cattles;
