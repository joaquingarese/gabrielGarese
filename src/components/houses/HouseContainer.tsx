import React, { useEffect, useState } from 'react';
import Farm from '../farms/Farm';
import House from '../houses/House';
import { Farm2, House2, CattleType } from '~/pages/types';
import { FarmsData } from '~/pages/types';
import Cattle from '../cattle/Cattle';
import { useSetAtom } from 'jotai';

interface HouseContainerProps {
  properties: Farm2[];
}

const HouseContainer = ({ properties }: HouseContainerProps) => {
  return (
    <div className="container font-navbar mb-16">
      {properties.map((property) => (
        <House key={property._id} property={property} />
      ))}
    </div>
  );
};

export default HouseContainer;
