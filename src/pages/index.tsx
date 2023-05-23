import { NextPage } from 'next';
import Hero from '~/components/index/Hero';
import PropertiesContainer from '~/components/propertiesContainer/PropertiesContainer';
import { createClient } from 'next-sanity';
import { getClient } from '~/lib/sanity.server';
import { Farm2 } from './types';
import farmsQuery from '~/queries/farms';

interface HomeProps {
  farms: Array<Farm2>;
}

const Home: NextPage<HomeProps> = ({ farms }) => {
  console.log(farms);
  return (
    <>
      <div className="flex-grow">
        <Hero />
        <hr className="border-2 border-gray-300 mt-8 mx-8" />
        <hr className="mt-4 mb-10 w-3/4 mx-auto border-gray-300" />
        <div className="container mt-10">
          <h3 className="text-2xl md:text-3xl mb-6 font-title">CAMPOS DESTACADOS</h3>
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
