import React, { useEffect, useState } from 'react';
import CardSlider from '../UIElements/CardSlider';
import ImageGallery from '../UIElements/ImageGallery';
import BlockContent from '@sanity/block-content-to-react';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowsMove } from 'react-icons/bs';
import { MdWaterDrop } from 'react-icons/md';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { FaShower } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { House2 } from '~/pages/types';

interface HouseViewProps {
  house: House2;
}

function HouseView({ house }: HouseViewProps) {
  console.log(house);
  const [imagesSt, setImagesSt] = useState<string[]>([]);

  useEffect(() => {
    let imageURLS = [house.image.asset.url];

    if (house.gallery !== null) {
      house.gallery.forEach((item, i) => {
        imageURLS.push(item.image.asset.url);
      });
    }

    setImagesSt(imageURLS);
  }, []);

  return (
    <>
      <div className="flex flex-col container mt-32 md:mt-10 ">
        <h3 className="text-2xl md:text-3xl mb-6 font-navbar block">{house.name}</h3>
        <span className="mb-2">
          <MdLocationOn size={24} className="text-secondary inline" /> Propiedades{' >'}{' '}
          {house.state.name}
        </span>
        <div className="md:w-3/4 xl:w-8/12 3xl:w-6/12">
          <ImageGallery images={imagesSt} />
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
          <p className="w-full lg:w-3/4 xl:w-1/2">
            <BlockContent blocks={house.detail} />
          </p>
          <div className="flex flex-col pt-4 md:mt-0">
            <h4 className="text-2xl text-secondary font-title my-2">Contacto</h4>
            <div className="flex">
              <BsFillTelephoneFill
                size={54}
                className="bg-gray-200 p-2 text-tertiary mr-2 rounded-md"
              />
              <MdMail size={54} className="bg-gray-200 p-2 ml-2 text-tertiary rounded-md" />
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center">
        <hr className="border-solid border-2 border-gray-300 w-10/12 px-6" />
        <hr className="border-solid border-1 border-gray-400 w-3/4 mt-4 mb-6" />
      </div>

      <div className="my-10 container">
        <h4 className="text-2xl text-secondary font-medium">
          Campos similares que te pueden interesar
        </h4>
        <CardSlider />
      </div>
    </>
  );
}

export default HouseView;
