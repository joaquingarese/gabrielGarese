import React from 'react';
import Farm from '../farms/Farm';
import House from '../houses/House';
import { Farm2, House2, CattlesType } from '~/pages/types';
import Cattle from '../cattle/Cattle';

interface PropertiesContainerProps {
  propertyType: string;
  properties: Array<Farm2> | Array<House2> | Array<CattlesType>;
}

const PropertiesContainer = ({ propertyType, properties }: PropertiesContainerProps) => {
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
  const cattelPropertiesExample = [
    {
      race: 'Hereford',
      quantity: 20,
      information: 'Ganado bien gordo',
      id: 'qhobdeob'
    },
    {
      race: 'Normando',
      quantity: 29,
      information: 'Ganado bien buenaso',
      id: 'qhobdeobdd'
    },
    {
      race: 'Angus',
      quantity: 20,
      information: 'Espectacular Ganado',
      id: 'qhsdwobdeob'
    }
  ];

  return (
    <div className="container font-navbar mb-16">
      {propertyType === 'farm'
        ? farmsPropertiesExample.map((property) => <Farm key={property.id} property={property} />)
        : propertyType === 'house'
        ? housesPropertiesExample.map((property) => <House key={property.id} property={property} />)
        : cattelPropertiesExample.map((property) => (
            <Cattle key={property.id} property={property} />
          ))}
    </div>
  );
};

export default PropertiesContainer;
