import React, { useState, useEffect } from 'react';
import PropertiesContainer from '../propertiesContainer/PropertiesContainer';
import Link from 'next/link';

function Farms() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 800);
  }, []);

  return (
    <>
      <div className="container mt-1 flex-column">
        <h2 className=" text-2xl md:text-3xl font-title mt-4 font-medium">
          Campos en Uruguay o Paraguay
        </h2>
        <p className="font-navbar mt-4  xs:w-3/4  lg:w-1/3 text-textNotes font-thin">
          Seleccione localidad:
        </p>
        <section className="mb-10 mt-5">
          <div className="flex flex-wrap justify-center  md:my-18">
            <Link href={'/campos/Uruguay'}>
              <div
                role="button"
                className={`relative w-3/4 lg:w-1/3 md:h-auto lg:max-h-auto px-5 md:px-14 lg:px-8 brightness-75 hover:brightness-125 mb-4 lg:mb-0 ${
                  loaded ? 'scale-100' : 'scale-0'
                } transform transition-transform duration-1000`}
              >
                <img
                  src="/images/uruguayMarron3.png"
                  alt="mapa uruguay"
                  className="text-primary w-full h-full object-cover"
                />
                <div className="absolute top-[45%] right-[5%] w-full h-full flex justify-center">
                  <p className="text-slate-100 text-base xl:text-xl font-header">URUGUAY</p>
                </div>
              </div>
            </Link>
            <Link href={'/campos/paraguay'}>
              <div
                role="button"
                className={`relative w-3/4 lg:w-1/3 md:h-auto lg:max-h-auto px-5 md:px-14 lg:px-8 brightness-75 hover:brightness-125 mb-4 lg:mb-0 ${
                  loaded ? 'scale-100' : 'scale-0'
                } transform transition-transform duration-1000`}
              >
                <img
                  src="/images/paraguay6.png"
                  alt="mapa uruguay"
                  className="text-primary w-full h-full object-cover"
                />
                <div className="absolute top-[43%] right-[0%]  w-full h-full flex justify-center">
                  <p className="text-slate-100 text-base xl:text-xl font-header">PARAGUAY</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            {/* <img
              src="/images/uruguayMarron3.png"
              alt="mapa uruguay"
              className="text-primary w-full h-full object-cover"
            />
            <img
              src="/images/paraguay6.png"
              alt="mapa uruguay"
              className="text-primary w-full h-full object-cover"
            /> */}
          </div>
        </section>
        <hr className="border-2 border-gray-300 mt-8 mx-8" />
        <hr className="mt-4 mb-10 w-3/4 mx-auto border-gray-300" />
        <div className="flex container">
          <h3 className="text-2xl md:text-3xl mb-6 font-navbar  font-medium">Campos Destacados</h3>
        </div>
        <PropertiesContainer />
      </div>
    </>
  );
}

export default Farms;
