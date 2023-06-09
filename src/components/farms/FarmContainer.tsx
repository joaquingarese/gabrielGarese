import React from 'react';
import Farm from '../farms/Farm';
import { Farm2 } from '~/pages/types';

interface FarmContainerProps {
  properties: Farm2[];
}

const FarmContainer = ({ properties }: FarmContainerProps) => {
  return (
    <div className="container font-navbar mb-16">
      {properties.map((property, index) => (
        <Farm key={index} property={property} />
      ))}
    </div>
  );
};

export default FarmContainer;
