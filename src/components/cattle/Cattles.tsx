import React, { useState, useEffect } from 'react';
import CattleContainer from './CattleContainer';
import { CattleType } from '~/pages/types';

interface cattleDetailsProps {
  cattle: CattleType[];
}

const Cattles = ({ cattle }: cattleDetailsProps) => {
  return (
    <>
      <div className="container mt-28 md:mt-10 flex-column">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 ml-3 font-medium">GANADO</h2>
        <CattleContainer properties={cattle} />
      </div>
    </>
  );
};

export default Cattles;
