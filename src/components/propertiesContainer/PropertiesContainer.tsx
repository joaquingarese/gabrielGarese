import React from 'react';
import Farm from '../farms/Farm';
import House from '../houses/House';

interface PropertiesContainerProps {
  propertyType: string;
}

function PropertiesContainer({ propertyType }: PropertiesContainerProps) {
  const farmsPropertiesExample = [
    {
      state: 'Soriano',
      country: 'Uruguay',
      type: 'farm',
      id: '583309'
    },
    {
      state: 'Artigas',
      country: 'Paraguay',
      type: 'farm',
      id: '19471'
    },
    {
      state: 'Florida',
      country: 'Uruguay',
      type: 'farm',
      id: '311551'
    }
  ];
  const housesPropertiesExample = [
    {
      state: 'Soriano',
      town: 'Pocitos',
      type: 'house',
      id: '58353309'
    },
    {
      state: 'Artigas',
      town: 'Carrasco',
      type: 'house',
      id: '1934271'
    },
    {
      state: 'Florida',
      town: 'Pocitos',
      type: 'house',
      id: '31145551'
    }
  ];

  return (
    <div className="container font-navbar mb-16">
      {propertyType === 'farm'
        ? farmsPropertiesExample.map((property) => <Farm key={property.id} property={property} />)
        : housesPropertiesExample.map((property) => (
            <House key={property.id} property={property} />
          ))}
    </div>
  );
}

export default PropertiesContainer;
