import React, { useEffect, useState } from 'react';
import Farm from '../farms/Farm';
import House from '../houses/House';
import { House2 } from '~/pages/types';
import { useSetAtom } from 'jotai';

interface HouseContainerProps {
  houses: House2[];
}

const HouseContainer = ({ houses }: HouseContainerProps) => {
  return (
    <div className="container font-navbar mb-16 mt-6 flex flex-wrap justify-center">
      {houses.map((house) => (
        <House key={house._id} house={house} />
      ))}
    </div>
  );
};

export default HouseContainer;
