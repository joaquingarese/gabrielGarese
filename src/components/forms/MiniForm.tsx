import { useRouter } from 'next/router';
import { BsWhatsapp } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

interface MiniFormProps {
  type: string;
  property: Farm2 | House2 | CattleType;
}

function MiniForm({ type, property }: MiniFormProps) {
  const router = useRouter();

  const entities: Record<string, string> = {
    farm: '¿Le interesa este campo?',
    house: '¿Le interesa esta propiedad?',
    cattle: '¿Le interesa este ganado?'
  };

  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent(`Hola! Estoy interesado en ${property.name}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  const goToContacto = () => {
    router
      .push({
        pathname: `/contacto`,
        query: { name: property.name, type: property._type }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full rounded-xl border border-tierra-line bg-tierra p-6 text-cream">
      <span className="fence-line mb-5 block w-12 text-primary" aria-hidden="true" />
      <h2 className="font-header text-xl leading-snug text-cream">{entities[type]}</h2>
      <p className="mt-2 font-body text-sm leading-relaxed text-cream/70">
        Le respondemos en menos de 24 horas.
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClickWhatsApp();
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-navbar text-sm font-semibold uppercase tracking-[0.1em] text-tierra transition-colors hover:bg-secondary hover:text-cream"
      >
        <BsWhatsapp size={18} />
        WhatsApp
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goToContacto();
        }}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-cream/30 px-5 py-3 font-navbar text-sm font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
      >
        <MdMail size={18} />
        Escribir un mensaje
      </button>
    </div>
  );
}

export default MiniForm;
