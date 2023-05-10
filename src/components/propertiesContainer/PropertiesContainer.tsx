import React from 'react';
import Farm from '../farms/Farm';
import House from '../houses/House';

function PropertiesContainer() {
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
      {farmsPropertiesExample.map((property) => {
        if (property.type === 'farm') {
          return <Farm key={property.id} property={property} />;
        } else if (property.type === 'house') {
          return <House key={property.id} property={property} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default PropertiesContainer;
