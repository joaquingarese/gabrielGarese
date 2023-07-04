import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowsMove } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { MdMail } from 'react-icons/md';

function House({ house }: { house: House2 }) {
  console.log(house);
  const router = useRouter();

  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent(`Hola! Estoy interesado en ${house.name}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  return (
    <Link
      href={{
        pathname: `/propiedades/${house._id}`
      }}
    >
      <div
        className="bg-white grid grid-cols-1 my-7 shadow-md w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md md:rounded-none md:m-4"
        role="button"
        key={house._id}
      >
        <div className="col-span-1">
          <div className="relative h-full">
            <img
              src={house.image.asset.url}
              alt=""
              className="w-full h-[300px] object-cover rounded-t-md md:rounded-none"
            />
            <small className="absolute top-0 right-0 p-1 bg-tertiary rounded-md m-2 text-white">
              {house.transaction === 'sell' ? 'VENDE' : 'ALQUILA'}
            </small>
          </div>
        </div>
        <div className="col-span-2 pt-6 px-8 w-full flex flex-col justify-between">
          <h3 className="text-2xl font-navbard">{house.name}</h3>
          <div className="flex">
            <MdLocationOn size={34} className="text-secondary mt-3" />
            <span className="ml-2 mt-5">{house.state}</span>
          </div>
          <span className="text-2xl font-normal inline-block mt-8 2xl:mt-10">
            USD {house.price}
          </span>
          <hr className="border-1 w-full bg-slate-100 mt-2 2xl:mt-4" />
          <div className="flex flex-col justify-between w-full my-3">
            <div className="flex justify-center">
              <BsArrowsMove size={24} className="mt-2" />
              <span className="mt-2 ml-2">
                {house.size} m<sup>2</sup>
              </span>
              <MdOutlineBedroomChild size={24} className="mt-2 ml-4 mr-1 text-gray-600" />
              <span className="mt-2">{house.rooms} Cuartos</span>
            </div>
            <div className="flex pt-4 md:mt-0 justify-center">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onClickWhatsApp();
                }}
              >
                <BsWhatsapp
                  size={44}
                  className="bg-gray-200 p-2 text-tertiary mr-6 2xl:mr-2 rounded-md"
                />
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  router.push({
                    pathname: `/contacto`,
                    query: {
                      name: house.name,
                      type: house._type
                    }
                  });
                }}
              >
                <MdMail size={44} className="bg-gray-200 p-2 ml-6 text-tertiary rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default House;
