import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

function Footer() {
  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent(`Hola! Quisiera hacer una consulta.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };
  return (
    <footer className="relative bg-tierra text-cream/80">
      {/* Signature: the boundary fence marks the top edge */}
      <div aria-hidden="true" className="fence-line w-full text-primary/60" />

      <div className="2xs:container mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="w-[220px] max-w-full">
              <Image
                src="/images/logoFainaBlanco.png"
                alt="Gabriel Garese — Negocios Rurales"
                layout="responsive"
                width={400}
                height={100}
              />
            </div>
            <p className="mt-5 max-w-xs font-header text-[15px] italic leading-relaxed text-cream/70">
              Compra y venta de campos, ganado y propiedades en Uruguay y la región.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-4 font-header text-sm uppercase tracking-[0.2em] text-primary">
              Empresa
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/nosotros" className="transition-colors hover:text-cream">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/campos" className="transition-colors hover:text-cream">
                  Campos
                </Link>
              </li>
              <li>
                <Link href="/propiedades" className="transition-colors hover:text-cream">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/ganado" className="transition-colors hover:text-cream">
                  Ganado
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 font-header text-sm uppercase tracking-[0.2em] text-primary">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contacto">
                  <a className="flex items-center gap-2 transition-colors hover:text-cream">
                    <MdMail size={16} className="shrink-0 text-primary" />
                    Contáctenos
                  </a>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onClickWhatsApp}
                  className="flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <BsWhatsapp size={15} className="shrink-0 text-primary" />
                  099 680 911
                </button>
              </li>
              <li className="flex items-center gap-2">
                <MdLocationOn size={16} className="shrink-0 text-primary" />
                Máximo Tajes 7224
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-tierra-line pt-6 sm:flex-row sm:justify-between">
          <div className="opacity-80 md:hidden">
            <Image src="/images/GGBlanco.png" alt="Gabriel Garese" width={56} height={28} />
          </div>
          <p className="text-xs tracking-wide text-cream/50">
            &copy; {new Date().getFullYear()} Gabriel Garese — Negocios Rurales. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
