import Farms from '~/components/farms/Farms';
import { getClient } from '~/lib/sanity.server';
import farmsQuery from '~/queries/farms';

interface CamposProps {
  farms: Farm2[];
}

function Campos({ farms }: CamposProps) {
  return (
    <>
      <Farms farms={farms} />
    </>
  );
}

export async function getStaticProps() {
  const farms = await getClient().fetch(farmsQuery);

  return {
    props: {
      farms: farms.farms || []
    }
  };
}

export default Campos;
