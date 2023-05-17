import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 800);
  }, []);

  return (
    <>
      <div className="h-90vh relative flex items-end">
        <img
          src="images/campoHero2.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75"
        />
        {/* #8B4513 */}
        {/* <div className="absolute inset-0 bg-primary opacity-60 mix-blend-color" /> */}
        {/* <div className="ml-auto md:mr-4">
          <h3 className="relative text-slate-300  text-3xl mb-20 italic font-header ml-auto">
            Desde 1960 Cumpliendo con la palabra...
          </h3>
        </div> */}
        <div className="absolute top-[15%] right-[10%] lg:top-[20%] lg:right-[10%] w-3/4 lg:w-1/2">
          <h3 className=" text-white  text-5xl lg:text-7xl  font-card ml-auton ">
            Compre y Venda Campos en Uruguay y alrededores
          </h3>
          <button className="absolute bottom-[-35%] left-[8%] xs:bottom-[-40%] sm:bottom-[-65%] md:bottom-[-65%] lg:bottom-[-63%] md:left-[18%] lg:left-[14%] xl:left-[18%] w-30 lg:w-40 text-xl sm:text-2xl lg:text-3xl  bg-gray-800 text-slate-100 p-3 rounded-full hover:bg-gray-600">
            Comprar
          </button>
          <button className="absolute bottom-[-35%] left-[48%]  xs:bottom-[-40%] sm:bottom-[-65%] md:bottom-[-65%] lg:bottom-[-63%] md:left-[45%] lg:left-[54%] xl:left-[48%] w-30 lg:w-40 text-xl sm:text-2xl lg:text-3xl  bg-gray-800 text-slate-100 p-3 rounded-full hover:bg-gray-600">
            Vender
          </button>
        </div>
        <Link href={'/campos'}>
          <button
            className={`absolute top-[68%] left-[10%]  lg:top-[25%] lg:left-[10%]  w-40 md:w-60 text-2xl md:text-3xl rounded-lg bg-gray-800 text-slate-100 p-3 hover:bg-gray-600 ${
              loaded ? 'translate-x-0' : '-translate-x-[190%]'
            } transition-all duration-1000 ease-out`}
          >
            Campos
          </button>
        </Link>
        <button
          className={`absolute top-[82%] left-[10%]  lg:top-[45%] lg:left-[10%]  w-40 md:w-60 text-2xl md:text-3xl rounded-lg bg-gray-800 text-slate-100 p-3 hover:bg-gray-600 ${
            loaded ? 'translate-x-0' : '-translate-x-[190%]'
          } transition-all duration-1000 ease-out`}
        >
          Propiedades
        </button>
      </div>
    </>
  );
}

export default Hero;
