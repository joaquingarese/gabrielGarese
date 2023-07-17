import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
// import HeroSlider from '../UIElements/HeroSlider';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setTimeout(() => {
          setLoaded3(true);
        }, 500);
        setLoaded2(true);
      }, 500);
    }, 1000);
  }, []);

  return loading ? (
    <div className="fixed h-full inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10">
      <BeatLoader size={50} />
    </div>
  ) : (
    <>
      <div className="h-90vh relative flex items-end">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/campoHero2.webp"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
            onLoadingComplete={() => setLoading(false)}
            className="object-center filter brightness-75"
          />
        </div>
        <div className="absolute top-[20%] right-[5%] lg:top-[30%] lg:right-[7%] w-11/12 lg:w-7/12 h-full">
          <h3 className=" text-white text-4xl sm:text-5xl lg:text-7xl font-volte font-semibold mt-12 md:mt-[-70px] xl:mt-5 ml-3 animate-fadeIn">
            COMPRE Y VENDA CAMPOS EN URUGUAY Y ALREDEDORES
          </h3>
          <div className="flex justify-end">
            <Link href={'/contacto'}>
              <button className="md:w-80 text-xl md:text-xl bg-red-800 text-white p-1 md:p-2  hover:bg-gray-600 shadow-lg animate-fadeIn font-title font-thin mt-4 md:mt-8">
                CONTÁCTENOS
              </button>
            </Link>
          </div>
          {/* <HeroSlider /> */}
        </div>
        <Link href={'/campos'}>
          <button
            className={`absolute top-[65%] left-[10%] lg:top-[25%] lg:left-[10%] w-[190px] md:w-50 text-xl md:text-xl rounded-lg bg-gray-800 text-slate-100 p-1 md:p-2 hover:bg-gray-600
            ${
              loaded ? 'translate-x-0' : '-translate-x-[2500%]'
            } transition-all duration-500 ease-out`}
          >
            CAMPOS
          </button>
        </Link>
        <Link href={'/ganado'}>
          <button
            className={`absolute top-[74%] left-[10%]  lg:top-[38%] lg:left-[10%] w-[190px] md:w-50 text-xl md:text-xl rounded-lg bg-gray-800 text-slate-100 p-1 md:p-2 hover:bg-gray-600
            ${
              loaded2 ? 'translate-x-0' : '-translate-x-[250%]'
            } transition-all duration-500 ease-out`}
          >
            GANADO
          </button>
        </Link>
        <Link href={'/propiedades'}>
          <button
            className={`absolute top-[83%] left-[10%]  lg:top-[51%] lg:left-[10%] w-[190px] md:w-50 text-xl md:text-xl rounded-lg bg-gray-800 text-slate-100 p-1 md:p-3 hover:bg-gray-600
          ${
            loaded3 ? 'translate-x-0' : '-translate-x-[250%]'
          } transition-all duration-500 ease-out`}
          >
            PROPIEDADES
          </button>
        </Link>
        {/* <Link href={'/contacto'}>
          <button
            className={`absolute top-[86%] left-[10%] lg:top-[74%] lg:left-[10%] w-[130px] md:w-80 text-xl md:text-xl bg-red-800 text-white p-2 md:p-3  hover:bg-gray-600 shadow-lg 
    ${
      loaded4 ? 'translate-x-0' : '-translate-x-[250%]'
    } transition-all duration-500 ease-out transform hover:scale-105`}
          >
            CONTACTO
          </button>
        </Link> */}
      </div>
    </>
  );
}

export default Hero;
