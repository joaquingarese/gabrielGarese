import BlockContent from '@sanity/block-content-to-react';
import React, { useEffect, useState } from 'react';

import { BsArrowsMove } from 'react-icons/bs';
import { FaShower } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

import { MdOutlineBedroomChild } from 'react-icons/md';

// import CardSlider from '../UIElements/CardSlider';
import ImageGallery from '../UIElements/ImageGallery';
import ExtraMiniForm from '../forms/ExtraMiniForm';
import MiniForm from '../forms/MiniForm';

interface HouseViewProps {
  house: House2;
}

function HouseView({ house }: HouseViewProps) {
  const [imagesSt, setImagesSt] = useState<string[]>([]);

  useEffect(() => {
    const imageURLS: string[] = [];

    if (house?.image?.asset?.url) {
      imageURLS.push(house.image.asset.url);
    }

    if (house?.gallery) {
      house.gallery.forEach((item) => {
        imageURLS.push(item.image.asset.url);
      });
    }

    setImagesSt(imageURLS);
  }, [house?.gallery, house?.image?.asset?.url]);

  return (
    <>
      {house && (
        <div className="flex flex-col 2xs:container 3xs:p-4 mt-32 md:mt-10 ">
          <h3 className="text-2xl md:text-3xl mb-6 font-navbar block">{house.name}</h3>
          <span className="mb-2">
            <MdLocationOn size={24} className="text-secondary inline" /> Propiedades{' >'}{' '}
            {house.state}
          </span>
          <div className="flex">
            <div className="w-full md:w-3/4 xl:w-8/12 3xl:w-6/12">
              <ImageGallery images={imagesSt} />
            </div>
            <div className="w-1/4 mx-10 hidden xl:block">
              <MiniForm type={'house'} property={house} />
            </div>
          </div>
          <section className="mb-12">
            {/* <hr className="border-solid border-1 border-gray-400 w-3/4" /> */}
            <span className="flex items-center mt-2">
              <span className="mr-4">
                <BsArrowsMove size={20} className="text-secondary inline mr-1" /> {house.size} m
                <sup>2</sup>
              </span>
              <MdOutlineBedroomChild size={20} className="text-secondary inline" />
              <span className="ml-1"> {house.bathrooms} Cuartos</span>{' '}
              <span className="ml-4">
                <FaShower className="text-secondary inline" /> {house.bathrooms} Baños
              </span>
            </span>
            <h4 className="text-2xl text-secondary font-title mt-6">
              Precio:{' '}
              <span className="text-black text-lg font-navbar mt-2 ml-2">
                USD {house.price.toLocaleString('de-DE')}
              </span>
            </h4>
            <small className="text-sm font-title">
              Precio de {house.transaction === 'sell' ? 'Venta' : 'Alquiler'}
            </small>

            <h4 className="text-xl text-secondary font-title mt-6 my-2">
              Descripción de la propiedad
            </h4>
            <div className="w-full lg:w-3/4 xl:w-1/2">
              <BlockContent blocks={house.detail} />
            </div>
            <div className="w-full md:w-3/4 block xl:hidden my-8 m-auto">
              <ExtraMiniForm type={'house'} property={house} />
            </div>
          </section>
        </div>
        /* <div className="flex flex-col items-center">
        <hr className="border-solid border-2 border-gray-300 w-10/12 px-6" />
        <hr className="border-solid border-1 border-gray-400 w-3/4 mt-4 mb-6" />
      </div>

      <div className="my-10 2xs:container 3xs:p-4 p-0">
        <h4 className="text-2xl text-secondary font-medium">
          Campos similares que te pueden interesar
        </h4>
        <CardSlider />
      </div> */
      )}
    </>
  );
}

export default HouseView;
