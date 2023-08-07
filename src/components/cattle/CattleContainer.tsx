import Cattle from '../cattle/Cattle';

interface CattleContainerProps {
  cattles: CattleType[];
}

const CattleContainer = ({ cattles }: CattleContainerProps) => {
  return (
    <div className="2xs:container font-navbar mb-16 3xs:p-3 p-0 3xl:px-32">
      {cattles.length > 0 ? (
        cattles.map((cattle) => <Cattle key={cattle._id} cattle={cattle} />)
      ) : (
        <p className="text-primary text-xl mt-5">
          Por el momento no contamos con ganado en oferta...
        </p>
      )}
    </div>
  );
};

export default CattleContainer;
