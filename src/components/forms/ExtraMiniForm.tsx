import React from 'react';
import { useRouter } from 'next/router';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

interface ExtraMiniFormProps {
  type: string;
  property: Farm2 | House2 | CattleType;
}

function ExtraMiniForm({ type, property }: ExtraMiniFormProps) {
  const router = useRouter();
  const entities: Record<string, string> = {
    farm: 'Te interesa este Campo?',
    house: 'Te interesa esta Propiedad?',
    cattle: 'Te interesa este Ganado?'
  };

  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent(`Hola! Estoy interesado en ${property.name}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
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
        <div
          onClick={(e) => {
            e.stopPropagation();
            onClickWhatsApp();
          }}
        >
          <BsFillTelephoneFill
            role="button"
            size={40}
            className="bg-gray-200 p-2 text-tertiary rounded-md mr-2"
          />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            router.push({
              pathname: `/contacto`,
              query: {
                name: property.name,
                type: property._type
              }
            });
          }}
        >
          <MdMail role="button" size={40} className="bg-gray-200 p-1 text-tertiary rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default ExtraMiniForm;
