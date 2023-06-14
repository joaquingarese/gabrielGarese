import React, { useEffect, useState } from 'react';
import { CattleType } from '~/pages/types';
import Cattle from '../cattle/Cattle';
import { useSetAtom } from 'jotai';

interface CattleContainerProps {
  cattles: CattleType[];
}

const CattleContainer = ({ cattles }: CattleContainerProps) => {
  return (
    <div className="container font-navbar mb-16">
      {cattles.map((cattle) => (
        <Cattle key={cattle._id} cattle={cattle} />
      ))}
    </div>
  );
};

export default CattleContainer;
