import React, { useEffect, useState } from 'react';
import Cattle from '../cattle/Cattle';

interface CattleContainerProps {
  cattles: CattleType[];
}

const CattleContainer = ({ cattles }: CattleContainerProps) => {
  return (
    <div className="2xs:container font-navbar mb-16 3xs:p-3 p-0">
      {cattles.map((cattle) => (
        <Cattle key={cattle._id} cattle={cattle} />
      ))}
    </div>
  );
};

export default CattleContainer;
