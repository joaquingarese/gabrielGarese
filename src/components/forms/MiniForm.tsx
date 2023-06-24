import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

interface MiniFormProps {
  type: string;
}

function MiniForm({ type }: MiniFormProps) {
  const entities: Record<string, string> = {
    farm: 'Te interesa este Campo?',
    house: 'Te interesa esta Propiedad?',
    cattle: 'Te interesa este Ganado?'
  };

  return (
    <div className={`flex flex-col bg-white p-3 h-[400px] w-[250px] rounded`}>
      <h2 className="text-2xl font-title p-2 text-center">{entities[type]}</h2>
      <h3 className="font-title text-center mt-auto">
        <strong className="text-primary text-center mt-auto block text-2xl">CONTÁCTANOS!</strong>
        Te responderemos en menos de 24hs!
      </h3>
      <div className="flex justify-center mt-auto mb-3">
        <BsFillTelephoneFill
          role="button"
          size={55}
          className="bg-gray-200 p-2 text-secondary mr-6 rounded-md"
        />
        <MdMail
          role="button"
          size={55}
          className="bg-gray-200 p-2 text-secondary rounded-md ml-6"
        />
      </div>
    </div>
  );
}

export default MiniForm;