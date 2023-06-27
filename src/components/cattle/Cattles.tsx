import React, { useState, useEffect } from 'react';
import CattleContainer from './CattleContainer';

interface cattleDetailsProps {
  cattles: CattleType[];
}

const Cattles = ({ cattles }: cattleDetailsProps) => {
  return (
    <>
      <div className="2xs:container 3xs:p-2 p-0 mt-28 md:mt-10 flex-column">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 ml-3 font-medium">GANADO</h2>
        <CattleContainer cattles={cattles} />
      </div>
    </>
  );
};

export default Cattles;
