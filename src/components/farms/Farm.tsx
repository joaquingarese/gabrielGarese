import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowsMove, BsWhatsapp } from 'react-icons/bs';
import { GiCow, GiBull } from 'react-icons/gi';
import { MdLocationOn, MdMail, MdOutlineAgriculture, MdForest } from 'react-icons/md';

const specialityMap: Record<string, { label: string; icon: React.ReactNode }> = {
  agriculture: { label: 'Agrícola', icon: <MdOutlineAgriculture size={16} /> },
  milking: { label: 'Tambo', icon: <GiCow size={16} /> },
  cattle: { label: 'Ganadero', icon: <GiBull size={16} /> },
  forestry: { label: 'Forestal', icon: <MdForest size={16} /> }
};

function Farm({ property }: { property: Farm2 }) {
  const router = useRouter();

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

  const totalPrice = property.price > 0 ? property.price * property.size : 0;

  return (
    <Link
      href={{
        pathname: `/campos/${property.country.name}/${property._id}`,
        query: {
          state: property.state?.name,
          country: property.country.name,
          id: property._id
        }
      }}
    >
      <article
        role="button"
        className="group my-6 grid cursor-pointer grid-cols-1 overflow-hidden rounded-xl border border-lightBrown/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[300px_1fr]"
      >
        {/* Image */}
        <div className="relative h-[220px] md:h-full md:min-h-[270px]">
          <Image
            src={property.image?.asset.url}
            alt={property.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-tierra/90 px-3 py-1 font-navbar text-[11px] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
            {property.transaction === 'sell' ? 'En venta' : 'En arriendo'}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 md:p-7">
          <h3 className="font-header text-xl leading-snug text-tierra transition-colors group-hover:text-primary md:text-2xl">
            {property.name}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 font-body text-sm text-tertiary">
            <MdLocationOn size={18} className="shrink-0 text-primary" />
            {property.state?.name === undefined ? 'Paraguay' : property.state.name}
          </div>

          {/* Specialities */}
          {property.specialities.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {property.specialities.map((speciality) => {
                const entry = specialityMap[speciality as string];
                if (!entry) return null;
                return (
                  <span
                    key={speciality}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 font-navbar text-xs font-medium text-tertiary"
                  >
                    <span className="text-primary">{entry.icon}</span>
                    {entry.label}
                  </span>
                );
              })}
            </div>
          )}

          {/* Footer: size, price, actions */}
          <div className="mt-auto border-t border-lightBrown/70 pt-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 font-body text-sm text-tertiary">
                  <BsArrowsMove size={16} className="text-primary" />
                  <span className="font-semibold text-tierra">{property.size} hectáreas</span>
                </div>
                {property.price > 0 ? (
                  <div className="mt-1.5">
                    <span className="font-volte text-2xl font-semibold text-primary">
                      USD {totalPrice.toLocaleString('es-UY')}
                    </span>
                    <span className="ml-2 font-body text-xs text-caqui">
                      {property.price.toLocaleString('es-UY')} USD/ha
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToContacto();
                    }}
                    className="mt-1.5 font-navbar text-sm font-semibold uppercase tracking-[0.08em] text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Consúltenos el precio
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Consultar por WhatsApp"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickWhatsApp();
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-lightBrown text-tertiary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <BsWhatsapp size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Consultar por email"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToContacto();
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-lightBrown text-tertiary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <MdMail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Farm;
