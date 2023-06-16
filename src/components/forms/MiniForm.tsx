import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

interface MiniFormProps {
  height: number;
}

function MiniForm({ height }: MiniFormProps) {
  return (
    <div className={`flex flex-col bg-white p-3 h-[${height}px] w-[250px] rounded`}>
      <h2 className="text-2xl font-title p-2 text-center">Te interesa este Campo?</h2>
      <h3 className="font-title text-center mt-auto">
        <strong className="text-tertiary text-center mt-auto block">CONTÁCTANOS!</strong>Te
        responderemos en menos de 24hs!
      </h3>
      <div className="flex justify-center mt-auto">
        <BsFillTelephoneFill
          role="button"
          size={64}
          className="bg-gray-200 p-2 text-tertiary mr-6 rounded-md"
        />
        <MdMail role="button" size={64} className="bg-gray-200 p-2 text-tertiary rounded-md ml-6" />
      </div>
    </div>
  );
}

export default MiniForm;
