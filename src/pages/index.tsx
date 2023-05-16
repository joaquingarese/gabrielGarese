import { NextPage } from 'next';
import Hero from '~/components/index/Hero';
import PropertiesContainer from '~/components/propertiesContainer/PropertiesContainer';
import { createClient } from 'next-sanity';
import { Farm2 } from './types';

const client = createClient({
  projectId: 'c7nn4dit',
  dataset: 'production',
  apiVersion: '2022-05-15',
  useCdn: false
});

interface HomeProps {
  farms: Array<Farm2>;
}

const Home: NextPage<HomeProps> = ({ farms }) => {
  return (
    <>
      <div className="flex-grow mt-[-13%] sm:mt-[-8%] md:mt-[-5%] lg:mt-[-4%] xl:mt-[-3%] 2xl:mt-[-2%]">
        <Hero />
        <hr className="border-2 border-gray-300 mt-8 mx-8" />
        <hr className="mt-4 mb-10 w-3/4 mx-auto border-gray-300" />
        <div className="container mt-10">
          <h3 className="text-2xl md:text-3xl mb-6 font-title font-medium">Campos Destacados</h3>
        </div>

        <PropertiesContainer propertyType={'farm'} properties={farms} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const farms = await client.fetch(`*[_type == "farms"]`);

  return {
    props: {
      farms
    }
  };
}

export default Home;
