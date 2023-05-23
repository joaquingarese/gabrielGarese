import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setLoaded2(true);
      }, 1000);
    }, 2000);
  }, []);

  return (
    <>
      <div className="h-90vh relative flex items-end">
        <img
          src="images/campoHero2.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75"
        />
        <div className="absolute top-[15%] right-[10%] lg:top-[20%] lg:right-[10%] w-3/4 lg:w-1/2">
          <h3 className=" text-white  text-5xl md:text-7xl lg:text-7xl  font-title mt-12 md:mt-[-70px] xl:mt-5 ml-auto animate-fadeIn">
            Compre y Venda Campos en Uruguay y alrededores
          </h3>
          <div className="flex justify-end">
            <Link href={'/contacto'}>
              <button className="text-xl sm:text-xl lg:text-2xl   bg-tertiary text-slate-100 p-2  hover:bg-secondary mt-4 rounded-full animate-fadeIn font-title">
                CONTÁCTENOS
              </button>
            </Link>
          </div>

          {/* <button className="absolute bottom-[-35%] left-[8%] xs:bottom-[-40%] sm:bottom-[-65%] md:bottom-[-65%] lg:bottom-[-63%] md:left-[18%] lg:left-[14%] xl:left-[18%] w-30 lg:w-40 text-xl sm:text-2xl lg:text-3xl  bg-gray-800 text-slate-100 p-3 rounded-full hover:bg-gray-600">
            Comprar
          </button>
          <button className="absolute bottom-[-35%] left-[48%]  xs:bottom-[-40%] sm:bottom-[-65%] md:bottom-[-65%] lg:bottom-[-63%] md:left-[45%] lg:left-[54%] xl:left-[48%] w-30 lg:w-40 text-xl sm:text-2xl lg:text-3xl  bg-gray-800 text-slate-100 p-3 rounded-full hover:bg-gray-600">
            Vender
          </button> */}
        </div>
        <Link href={'/campos'}>
          <button
            className={`absolute top-[75%] left-[10%] lg:top-[25%] lg:left-[10%] w-[190px] md:w-60 text-xl md:text-2xl rounded-lg bg-gray-800 text-slate-100 p-2 md:p-3 hover:bg-gray-600
            ${
              loaded ? 'translate-x-0' : '-translate-x-[190%]'
            } transition-all duration-500 ease-out`}
          >
            CAMPOS
          </button>
        </Link>
        <button
          className={`absolute top-[85%] left-[10%]  lg:top-[45%] lg:left-[10%] w-[190px] md:w-60 text-xl md:text-2xl rounded-lg bg-gray-800 text-slate-100 p-2 md:p-3 hover:bg-gray-600
          ${
            loaded2 ? 'translate-x-0' : '-translate-x-[190%]'
          } transition-all duration-500 ease-out`}
        >
          PROPIEDADES
        </button>
      </div>
    </>
  );
}

export default Hero;
