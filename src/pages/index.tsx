import { NextPage } from 'next';
import Hero from '~/components/index/Hero';
import PropertiesContainer from '~/components/propertiesContainer/PropertiesContainer';
import { getClient } from '~/lib/sanity.server';
import { Farm2, FarmsData } from './types';
import farmsQuery from '~/queries/farms';

interface HomeProps {
  farms: FarmsData;
}

const Home = ({ farms }: HomeProps) => {
  console.log(farms.farms[1]);

  return (
    <>
      <div className="flex-grow">
        <Hero />
        <hr className="border-2 border-gray-300 mt-8 mx-8" />
        <hr className="mt-4 mb-10 w-3/4 mx-auto border-gray-300" />
        <div className="container mt-10">
          <h3 className="text-2xl md:text-3xl mb-6 font-title">CAMPOS DESTACADOS</h3>
          {/* {farms.map((farm, index) => (
            <div key={index}>
              <h2>{farm.name}</h2>
              <p>{farm.state}</p>
            </div>
          ))} */}
        </div>

        <PropertiesContainer propertyType={'farm'} properties={farms} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const farms = await getClient().fetch(farmsQuery);

  return {
    props: {
      farms
    }
  };
}

export default Home;
