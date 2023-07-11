import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowsMove } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { GiCow } from 'react-icons/gi';
import { GiBull } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { MdOutlineAgriculture } from 'react-icons/md';
import { MdForest } from 'react-icons/md';

function Farm({ property }: { property: Farm2 }) {
  const router = useRouter();

  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent(`Hola! Estoy interesado en ${property.name}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

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
      <div
        className="bg-white grid grid-cols-1 md:grid-cols-3 my-7 shadow-md w-full rounded-md md:rounded-none md:h-[300px]"
        role="button"
      >
        <div className="col-span-1 h-[250px] md:h-[auto]">
          <div className="relative h-full">
            <Image
              src={property.image?.asset.url}
              alt=""
              layout="fill"
              objectFit="cover"
              className="w-full h-full md:max-h-[300px] rounded-t-md md:rounded-none"
            />
            <small className="absolute top-0 right-0 p-1 bg-tertiary rounded-md m-2 text-white">
              {property.transaction === 'sell' ? 'VENDE' : 'ARRIENDA'}
            </small>
          </div>
        </div>
        <div className="col-span-2 pt-6 px-8 w-full flex flex-col items-start">
          <h3 className="text-2xl">{property.name}</h3>
          <div className="flex">
            <MdLocationOn size={34} className="text-secondary mt-3" />
            <span className="ml-2 mt-5">
              {property.state?.name === undefined ? 'Paraguay' : property.state.name}
            </span>
          </div>
          <span className="mt-8 inline-block 2xl:mt-8 2xl:mb-6">
            {property.specialities.map((speciality) => {
              let emoticon: React.ReactNode;
              let name = '';

              if (speciality === 'agriculture') {
                emoticon = <MdOutlineAgriculture size={30} className="inline" />;
                name = 'Agrícola';
              } else if (speciality === 'milking') {
                emoticon = <GiCow size={30} className="inline" />;
                name = 'Tambo';
              } else if (speciality === 'cattle') {
                emoticon = <GiBull size={30} className="inline" />;
                name = 'Ganadero';
              } else if (speciality === 'forestry') {
                emoticon = <MdForest size={30} className="inline" />;
                name = 'Forestal';
              }

              return (
                <p className="inline ml-2" key={speciality}>
                  {emoticon} {name}
                </p>
              );
            })}
          </span>
          <hr className="border-1 w-full bg-slate-100 mt-2 2xl:mt-4" />
          <div className="flex justify-between flex-col md:flex-row md:mt-6  w-full my-3">
            <div className="flex">
              <BsArrowsMove size={24} className="text-tertiary mt-2" />
              <span className="mt-2 ml-2">{property.size} Hectáreas</span>
              <span className="mt-2 ml-4">
                {property.price} <strong>USD/Ha </strong>
              </span>
            </div>
            <div className="flex my-4 md:mt-0 m-auto md:m-0">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onClickWhatsApp();
                }}
              >
                <BsWhatsapp size={44} className="bg-gray-200 p-2 text-tertiary mr-3 rounded-md" />
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  router
                    .push({
                      pathname: `/contacto`,
                      query: {
                        name: property.name,
                        type: property._type
                      }
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              >
                <MdMail size={44} className="bg-gray-200 p-2 text-tertiary rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Farm;
