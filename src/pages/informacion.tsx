import Information from '~/components/information/Information';
import { getClient } from '~/lib/sanity.server';
import informationQuery from '~/queries/informationQuery';

interface informationProps {
  information: informationType[];
}

function informacion({ information }: informationProps) {
  return (
    <div>
      <Information information={information} />
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
