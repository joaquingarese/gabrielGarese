import Farms from '~/components/farms/Farms';
// import { getClient } from '~/lib/sanity.server';
// import farmsQuery from '~/queries/farms';

// interface CamposProps {
//   farms: Farm2[];
// }

// function Campos({ farms }: CamposProps) {
function Campos() {
  return (
    <>
      {/* <Farms farms={farms} /> */}
      <Farms />
    </>
  );
}

// export async function getStaticProps() {
//   const farms = await getClient().fetch(farmsQuery);

//   return {
//     props: {
//       farms: farms.farms || []
//     },
//     revalidate: 60
//   };
// }

export default Campos;
