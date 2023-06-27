import React from 'react';
import Link from 'next/link';
import HeroSlider from '../UIElements/HeroSlider';
import { useState, useEffect } from 'react';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            setLoaded4(true);
          }, 500);
          setLoaded3(true);
        }, 500);
        setLoaded2(true);
      }, 500);
    }, 1000);
  }, []);

  return (
    <>
      <div className="h-90vh relative flex items-end">
        <img
          src="images/campoHero2.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75"
        />
        <div className="absolute top-[20%] right-[5%] lg:top-[30%] lg:right-[7%] w-11/12 lg:w-7/12 h-full">
          <h3 className=" text-white text-4xl 2xs:text-5xl md:text-7xl lg:text-7xl font-body mt-12 md:mt-[-70px] xl:mt-5 ml-3 animate-fadeIn">
            Compre y Venda Campos en Uruguay y alrededores
          </h3>
          {/* <div className="flex justify-end">
            <Link href={'/contacto'}>
              <button className="text-xl sm:text-xl lg:text-2xl   bg-tertiary text-slate-100 p-2  hover:bg-secondary mt-4 rounded-full animate-fadeIn font-title">
                CONTÁCTENOS
              </button>
            </Link>
          </div> */}
          {/* <HeroSlider /> */}
        </div>
        <Link href={'/campos'}>
          <button
            className={`absolute top-[50%] left-[10%] lg:top-[25%] lg:left-[10%] w-[190px] md:w-50 text-xl md:text-xl rounded-lg bg-gray-800 text-slate-100 p-2 md:p-3 hover:bg-gray-600
            ${
              loaded ? 'translate-x-0' : '-translate-x-[2500%]'
            } transition-all duration-500 ease-out`}
          >
            CAMPOS
          </button>
        </Link>
        <Link href={'/ganado'}>
          <button
            className={`absolute top-[59%] left-[10%]  lg:top-[38%] lg:left-[10%] w-[190px] md:w-50 text-xl md:text-xl rounded-lg bg-gray-800 text-slate-100 p-2 md:p-3 hover:bg-gray-600
            ${
              loaded2 ? 'translate-x-0' : '-translate-x-[250%]'
            } transition-all duration-500 ease-out`}
          >
            GANADO
          </button>
        </Link>
        <Link href={'/propiedades'}>
          <button
            className={`absolute top-[67%] left-[10%]  lg:top-[51%] lg:left-[10%] w-[190px] md:w-50 text-xl md:text-xl rounded-lg bg-gray-800 text-slate-100 p-2 md:p-3 hover:bg-gray-600
          ${
            loaded3 ? 'translate-x-0' : '-translate-x-[250%]'
          } transition-all duration-500 ease-out`}
          >
            PROPIEDADES
          </button>
        </Link>
        <Link href={'/contacto'}>
          <button
            className={`absolute top-[76%] left-[10%]  lg:top-[64%] lg:left-[10%] w-[190px] md:w-50 text-xl md:text-xl rounded-lg bg-gray-800 text-slate-100 p-2 md:p-3 hover:bg-gray-600
          ${
            loaded4 ? 'translate-x-0' : '-translate-x-[250%]'
          } transition-all duration-500 ease-out`}
          >
            CONTACTO
          </button>
        </Link>
      </div>
    </>
  );
}

export default Hero;
