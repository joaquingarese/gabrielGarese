import React, { useEffect, useState } from 'react';
import Farm from '../farms/Farm';
import House from '../houses/House';
import { CattleType } from '~/pages/types';
import { FarmsData } from '~/pages/types';
import Cattle from '../cattle/Cattle';
import { useSetAtom } from 'jotai';

interface CattleContainerProps {
  properties: CattleType[];
}

const CattleContainer = ({ properties }: CattleContainerProps) => {
  return (
    <div className="container font-navbar mb-16">
      {properties.map((property) => (
        <Cattle key={property._id} property={property} />
      ))}
    </div>
  );
};

export default CattleContainer;
