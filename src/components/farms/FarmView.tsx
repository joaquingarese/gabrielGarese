import React, { useEffect, useState } from 'react';
import CardSlider from '../tools/CardSlider';
import ImageGallery from '../tools/ImageGallery';
import { useRouter } from 'next/router';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowsMove } from 'react-icons/bs';
import { MdWaterDrop } from 'react-icons/md';
import { Farm2 } from '~/pages/types';
import BlockContent from '@sanity/block-content-to-react';

function FarmView({ farm }: { farm: Farm2 }) {
  const [imagesSt, setImagesSt] = useState<string[]>([]);
  const router = useRouter();
  const { state, country, id } = router.query;

  useEffect(() => {
    let imageURLS = [farm.image.asset.url];

    farm.gallery.forEach((item, i) => {
      imageURLS.push(item.image.asset.url);
    });

    setImagesSt(imageURLS);
  }, []);

  return (
    <>
      <div className="flex flex-col container mt-32 md:mt-10">
        <h3 className="text-2xl md:text-3xl mb-6 font-navbar block">{farm.name}</h3>
        <span className="mb-2">
          <MdLocationOn size={24} className="text-secondary inline" /> {country} {'>'} {state} {'>'}{' '}
          Campos
        </span>
        <div className="w-full md:w-3/4">
          <ImageGallery images={imagesSt} />
        </div>
        <section className="my-5 mb-10">
          <h4 className="text-2xl text-secondary font-medium my-2">Descripcion de la Propiedad</h4>
          <p>{farm.description}</p>
          <span className="flex items-center mt-2">
            <BsArrowsMove size={20} className="text-secondary inline mr-2" /> {farm.size} hectáreas
            <span className="ml-4"> USD{farm.price}/ha</span>{' '}
            <span className="ml-4">
              <MdWaterDrop className="inline" /> Riego
            </span>
          </span>
          <h4 className="text-2xl text-secondary font-medium mt-10 my-2">Detalle</h4>
          <BlockContent blocks={farm.detail} />
        </section>
      </div>
      <div className="flex flex-col items-center">
        <hr className="border-solid border-2 border-gray-300 w-10/12 px-6" />
        <hr className="border-solid border-1 border-gray-400 w-3/4 mt-4 mb-6" />
      </div>

      <div className="mb-10 container">
        <h4 className="text-2xl text-secondary font-medium">
          Campos similares que te pueden interesar
        </h4>
        <CardSlider />
      </div>
    </>
  );
}

export default FarmView;
