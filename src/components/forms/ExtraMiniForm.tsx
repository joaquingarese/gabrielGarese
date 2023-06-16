import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

// interface ExtraMiniFormProps {
//   height: number;
// }

function ExtraMiniForm() {
  return (
    <div className="flex bg-white p-3">
      <div className={`flex flex-col rounded m-auto`}>
        <p className="text-xl font-title text-center">Te interesa este Campo?</p>
        <h3 className="font-title text-center">
          <strong className="text-primary block my-2">CONTÁCTANOS!</strong>Te responderemos en menos
          de 24hs!
        </h3>
      </div>
      <div className="flex flex-col justify-center ml-auto mr-2">
        <BsFillTelephoneFill
          role="button"
          size={50}
          className="bg-gray-200 p-2 text-tertiary rounded-md mb-2"
        />
        <MdMail role="button" size={50} className="bg-gray-200 p-2 text-tertiary rounded-md" />
      </div>
    </div>
  );
}

export default ExtraMiniForm;
