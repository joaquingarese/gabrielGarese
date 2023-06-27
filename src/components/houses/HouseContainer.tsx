import React, { useEffect, useState } from 'react';
import House from '../houses/House';

interface HouseContainerProps {
  houses: House2[];
}

const HouseContainer = ({ houses }: HouseContainerProps) => {
  return (
    <div className="2xs:container font-navbar mb-16 mt-6 flex flex-wrap justify-center 3xs:p-3 p-0">
      {houses.map((house) => (
        <House key={house._id} house={house} />
      ))}
    </div>
  );
};

export default HouseContainer;
