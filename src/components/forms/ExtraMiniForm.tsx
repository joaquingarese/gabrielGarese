import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

interface ExtraMiniFormProps {
  type: string;
}

function ExtraMiniForm({ type }: ExtraMiniFormProps) {
  const entities: Record<string, string> = {
    farm: 'Te interesa este Campo?',
    house: 'Te interesa esta Propiedad?',
    cattle: 'Te interesa este Ganado?'
  };

  return (
    <div className="flex bg-white p-3 pb-4">
      <div className={`flex flex-col rounded m-auto`}>
        <h3 className="text-center">
          <strong className="text-primary text-xl">CONTÁCTANOS!</strong>
        </h3>
        <p className="font-title text-center">{entities[type]}</p>
        <p className="font-title text-center">Te responderemos en menos de 24hs!</p>
      </div>
      <div className="flex justify-center mt-auto mr-2">
        <BsFillTelephoneFill
          role="button"
          size={40}
          className="bg-gray-200 p-2 text-tertiary rounded-md mr-2"
        />
        <MdMail role="button" size={40} className="bg-gray-200 p-1 text-tertiary rounded-md" />
      </div>
    </div>
  );
}

export default ExtraMiniForm;
