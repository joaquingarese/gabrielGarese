import { BsWhatsapp } from 'react-icons/bs';
import { MdPhone, MdLocationOn } from 'react-icons/md';

import CustomForm from '~/components/forms/CustomForm';

function Contacto() {
  const fields = [
    { label: 'Mensaje*', type: 'hidden', name: 'Interés en:' },
    { label: 'Nombre Completo*', type: 'text', name: 'name' },
    { label: 'Email*', type: 'email', name: 'mail' },
    { label: 'Telefono', type: 'number', name: 'phone' },
    { label: 'Mensaje*', type: 'text-area', name: 'message' }
  ];

  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent('Hola! Quisiera hacer una consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  return (
    <section className="bg-bodyBackground">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl lg:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="fence-line block w-12 text-primary" aria-hidden="true" />
            <span className="font-navbar text-xs uppercase tracking-[0.28em] text-secondary">
              Contacto
            </span>
          </div>
          <h1 className="font-volte text-4xl font-semibold leading-tight text-tierra sm:text-5xl">
            Hablemos de su próximo negocio.
          </h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-tertiary">
            Cuéntenos qué está buscando —un campo, hacienda o una propiedad— y le respondemos en
            menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Contact channels */}
          <div className="relative overflow-hidden rounded-xl bg-tierra p-8 text-cream/80">
            <div className="fence-line mb-8 w-16 text-primary" aria-hidden="true" />
            <h2 className="font-header text-2xl text-cream">Otras vías</h2>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-cream/70">
              Si prefiere una respuesta inmediata, escríbanos directo por WhatsApp.
            </p>

            <ul className="mt-8 space-y-5">
              <li>
                <button
                  type="button"
                  onClick={onClickWhatsApp}
                  className="group flex w-full items-center gap-4 text-left transition-colors hover:text-cream"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-tierra">
                    <BsWhatsapp size={18} />
                  </span>
                  <span>
                    <span className="block font-navbar text-[11px] uppercase tracking-[0.18em] text-cream/50">
                      WhatsApp
                    </span>
                    <span className="font-body text-base">099 680 911</span>
                  </span>
                </button>
              </li>
              <li>
                <a
                  href="tel:+59899680911"
                  className="group flex items-center gap-4 transition-colors hover:text-cream"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-tierra">
                    <MdPhone size={20} />
                  </span>
                  <span>
                    <span className="block font-navbar text-[11px] uppercase tracking-[0.18em] text-cream/50">
                      Teléfono
                    </span>
                    <span className="font-body text-base">099 680 911</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MdLocationOn size={20} />
                </span>
                <span>
                  <span className="block font-navbar text-[11px] uppercase tracking-[0.18em] text-cream/50">
                    Oficina
                  </span>
                  <span className="font-body text-base">Máximo Tajes 7224, Montevideo</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <CustomForm fields={fields} />
        </div>
      </div>
    </section>
  );
}

export default Contacto;
