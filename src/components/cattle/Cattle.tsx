import React from 'react';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { GiBull } from 'react-icons/gi';
import { BsArrowRightShort } from 'react-icons/bs';
import { CattleType } from '~/pages/types';

function Cattle({ property }: { property: CattleType }) {
  console.log(property);
  return (
    <Link
      href={{
        pathname: `/ganado/${property._id}`,
        query: {
          race: property.race,
          quantity: property.size
        }
      }}
    >
      <div
        className="bg-white grid grid-cols-1 md:grid-cols-3 my-7 shadow-md w-full rounded-md md:rounded-none"
        role="button"
      >
        <div className="col-span-1 ">
          <div className="relative h-full">
            <img
              src="/images/campoPrueba.jpg"
              alt=""
              className="w-full h-full object-cover rounded-t-md md:rounded-none"
            />
            {/* Capaz que aca en vez de vende arrienda, pone algo asi como remate, o majada de ganado, o lo que sea. */}
            {/* <small className="absolute top-0 right-0 p-1 bg-tertiary rounded-md m-2 text-white">
              VENDE
            </small> */}
          </div>
        </div>
        <div className="col-span-2 pt-6 px-8 w-full flex flex-col justify-between">
          <h3 className="text-2xl font-navbar">{property.name}</h3>
          <div className="flex">
            <MdLocationOn size={34} className="text-secondary mt-3" />
            <span className="ml-2 mt-5">{property.state.name}</span>
          </div>
          <p className="mt-1 inline-block">{property.shortDescription}</p>
          <hr className="border-1 w-full bg-slate-100 mt-2 2xl:mt-4 3xl:mb-[-25px]" />
          <div className="flex justify-between flex-col md:flex-row  w-full my-3 ">
            <div className="flex ">
              <GiBull size={24} className="mt-2" />
              <span className="mt-2 ml-2">{property.size} Cabezas de Ganado</span>{' '}
              <BsArrowRightShort size={26} className="mt-2 ml-4 mr-1" />
              <span className="mt-2">{property.category}</span>
            </div>
            <div className="flex mt-3 md:mt-0">
              <BsFillTelephoneFill
                size={44}
                className="bg-gray-200 p-2 text-tertiary mr-3 rounded-md"
              />
              <MdMail size={44} className="bg-gray-200 p-2 text-tertiary rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cattle;
