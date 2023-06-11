import React from 'react';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowsMove } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { House2 } from '~/pages/types';

function House({ property }: { property: House2 }) {
  return (
    <Link
      href={{
        pathname: `/propiedades/${property._id}`
      }}
    >
      <div
        className="bg-white grid grid-cols-1 md:grid-cols-3 my-7 shadow-md w-full rounded-md md:rounded-none"
        role="button"
        key={property._id}
      >
        <div className="col-span-1 ">
          <div className="relative h-full">
            <img
              src="/images/campoPrueba.jpg"
              alt=""
              className="w-full h-full object-cover rounded-t-md md:rounded-none"
            />
            <small className="absolute top-0 right-0 p-1 bg-tertiary rounded-md m-2 text-white">
              VENDE
            </small>
          </div>
        </div>
        <div className="col-span-2 pt-6 px-8 w-full flex flex-col justify-between">
          <h3 className="text-2xl font-navbard">Campo Forestal y Ganadero</h3>
          <div className="flex">
            <MdLocationOn size={34} className="text-secondary mt-3" />
            <span className="ml-2 mt-5">{property.state}</span>
          </div>
          <span className="text-primary text-2xl font-semibold inline-block mt-8 2xl:mt-10">
            USD 2.040.000
          </span>
          <hr className="border-1 w-full bg-slate-100 mt-2 2xl:mt-4" />
          <div className="flex justify-between flex-col md:flex-row  w-full my-3 ">
            <div className="flex ">
              <BsArrowsMove size={24} className="text-tertiary mt-2" />
              <span className="mt-2 ml-2">550 Hectáreas</span>{' '}
              <span className="mt-2 ml-4">
                3.300 <strong>USD/Ha</strong>
              </span>
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

export default House;
