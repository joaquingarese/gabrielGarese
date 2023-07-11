import Image from 'next/image';
import Link from 'next/link';

import { BsArrowsMove } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { MdMail } from 'react-icons/md';

interface Property {
  state: string;
  country: string;
  type: string;
  id: string;
}

function CardFarm({ property }: { property: Property }) {
  return (
    <Link
      href={{
        pathname: `/campos/${property.country}/${property.id}`,
        query: {
          state: property.state,
          country: property.country
        }
      }}
    >
      <div
        className="bg-white grid grid-cols-1 my-7 shadow-md w-full rounded-md "
        role="button"
        key={property.id}
      >
        <div className="col-span-1 ">
          <div className="relative h-full">
            <Image
              src="/images/campoPrueba.jpg"
              alt=""
              className="w-full h-full object-cover rounded-t-md"
              layout="fill"
            />
            <small className="absolute top-0 right-0 p-1 bg-tertiary rounded-md m-3 text-white text-sm lg:text-base">
              VENDE
            </small>
          </div>
        </div>
        <div className="col-span-2 pt-6 px-8 w-full flex flex-col items-start">
          <h3 className="font-navbar">Campo Forestal y Ganadero</h3>
          <div className="flex">
            <MdLocationOn size={34} className="text-secondary mt-3" />
            <span className="ml-2 mt-5">{property.state}</span>
          </div>
          <span className="text-primary text-2xl font-semibold mt-8 inline-block 2xl:mt-16">
            USD 2.040.000
          </span>
          <hr className="border-1 w-full bg-slate-100 mt-2 2xl:mt-4" />
          <div className="flex justify-between flex-col  w-full my-3 ">
            <div className="flex ">
              <BsArrowsMove size={24} className="text-tertiary mt-2" />
              <span className="mt-2 ml-2 text-base">550 Hectáreas</span>
              <span className="mt-2 ml-4 text-base">
                3.300 <strong>USD/Ha</strong>
              </span>
            </div>
            <div className="flex mt-4 p-2 justify-center">
              <BsWhatsapp size={44} className="bg-gray-200 p-2 text-tertiary mr-3 rounded-md" />
              <MdMail size={44} className="bg-gray-200 p-2 text-tertiary rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardFarm;
