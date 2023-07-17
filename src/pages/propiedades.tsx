import Houses from '~/components/houses/Houses';
import { getClient } from '~/lib/sanity.server';
import housesQuery from '~/queries/house';

interface PropiedadesProps {
  houses: House2[];
}

const Propiedades = ({ houses }: PropiedadesProps) => {
  return (
    <>
      <Houses houses={houses} />{' '}
    </>
  );
};

export async function getStaticProps() {
  const houses = await getClient().fetch(housesQuery);

  return {
    props: {
      houses: houses.houses || []
    },
    revalidate: 60
  };
}

export default Propiedades;
