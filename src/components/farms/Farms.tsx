import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import FarmContainer from './FarmContainer';

interface FarmsProps {
  farms: Farm2[];
}

const Farms = ({ farms }: FarmsProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 800);
  }, []);

  return (
    <>
      <div className="2xs:container 3xs:p-4 p-0 mt-28 md:mt-10 flex-column">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 font-medium">
          CAMPOS EN URUGUAY O PARAGUAY
        </h2>
        <p className="font-navbar mt-4 xs:w-3/4 lg:w-1/3 text-textNotes font-thin">
          Seleccione localidad:
        </p>
        <section className="mb-10 mt-5">
          <div className="flex flex-wrap sm:flex-nowrap justify-center md:my-18 h-[500px] lg:h-[400px] xl:h-[600px]">
            <Link href={'/location/Uruguay'}>
              <div
                role="button"
                className={`relative w-3/4 lg:w-1/2 3xl:w-1/3 md:h-auto px-5 md:px-14 lg:px-8 brightness-75 hover:brightness-125 mb-4 lg:mb-0 ${
                  loaded ? 'scale-100' : 'scale-0'
                } transform transition-transform duration-1000`}
              >
                <Image
                  src="/images/uruguayMarron3.png"
                  alt="mapa uruguay"
                  layout="fill"
                  objectFit="contain"
                  className="text-primary"
                />
                <div className="absolute top-[45%] right-[5%] w-full h-full flex justify-center">
                  <p className="text-slate-100 text-base xl:text-xl font-header">URUGUAY</p>
                </div>
              </div>
            </Link>
            <Link href={'/location/Paraguay'}>
              <div
                role="button"
                className={`relative w-3/4 lg:w-1/2 3xl:w-1/3 md:h-auto lg:max-h-auto px-5 md:px-14 lg:px-8 brightness-75 hover:brightness-125 mb-4 lg:mb-0 ${
                  loaded ? 'scale-100' : 'scale-0'
                } transform transition-transform duration-1000`}
              >
                <Image
                  src="/images/paraguay6.png"
                  alt="mapa uruguay"
                  layout="fill"
                  objectFit="contain"
                  className="text-primary"
                />
                <div className="absolute top-[41%] sm:top-[45%] right-[0%]  w-full h-full flex justify-center">
                  <p className="text-slate-100 text-sm xl:text-xl font-header">PARAGUAY</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <hr className="border-2 border-gray-300 mt-8 mx-8" />
        <hr className="mt-4 mb-10 w-3/4 mx-auto border-gray-300" />
        <div className="flex 2xs:container">
          <h3 className="text-2xl md:text-3xl mb-6 font-title">CAMPOS DESTACADOS</h3>
        </div>
        <FarmContainer properties={farms} />
      </div>
    </>
  );
};

export default Farms;
