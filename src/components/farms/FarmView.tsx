import BlockContent from '@sanity/block-content-to-react';
import React, { useEffect, useState } from 'react';

import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BsArrowsMove } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

// import CardSlider from '../UIElements/CardSlider';
import ImageGallery from '../UIElements/ImageGallery';
import ExtraMiniForm from '../forms/ExtraMiniForm';
import MiniForm from '../forms/MiniForm';

function FarmView({ farm }: { farm: Farm2 }) {
  const [imagesSt, setImagesSt] = useState<string[]>([]);

  useEffect(() => {
    const imageURLS = [farm.image.asset.url];

    farm.gallery?.forEach((item) => {
      imageURLS.push(item.image.asset.url);
    });

    setImagesSt(imageURLS);
  }, [farm.gallery, farm.image.asset.url]);

  return (
    <>
      <div className="flex flex-col 2xs:container 3xs:p-4 p-0 mt-32 md:mt-10">
        <h3 className="text-2xl md:text-3xl mb-6 font-navbar block">{farm.name}</h3>
        <span className="mb-2">
          <MdLocationOn size={24} className="text-secondary inline" /> {farm.country.name}
          {farm.state?.name && ` > ${farm.state.name} `} {'>'}
          {''} Campos
        </span>
        <div className="flex">
          <div className="w-full md:w-3/4 xl:w-8/12 3xl:w-6/12">
            <ImageGallery images={imagesSt} />
          </div>
          <div className="w-1/4 mx-10 hidden xl:block">
            <MiniForm type={'farm'} property={farm} />
          </div>
        </div>
        <section className="my-5 mb-10 flex flex-col">
          <div className="w-full ">
            <h4 className="text-xl text-secondary font-title my-2">Descripcion de la Propiedad</h4>
            <p>{farm.description}</p>
            <span className="flex items-center mt-2">
              <BsArrowsMove size={20} className="text-secondary inline mr-2" /> {farm.size}{' '}
              hectáreas
              <span className="ml-4">
                {' '}
                <AiOutlineDollarCircle size={25} className="text-secondary inline mb-1" /> USD
                {farm.price}/ha
              </span>{' '}
            </span>
            <h4 className="text-xl text-secondary font-title mt-6 mb-2">Detalle</h4>
            <div className="w-full lg:w-3/4 xl:w-1/2">
              <BlockContent blocks={farm.detail} />
            </div>
          </div>
          <div className="w-full md:w-3/4 block xl:hidden my-8 m-auto">
            <ExtraMiniForm type={'farm'} property={farm} />
          </div>
        </section>
      </div>
      {/* <div className="flex flex-col items-center">
        <hr className="border-solid border-2 border-gray-300 w-10/12 px-6" />
        <hr className="border-solid border-1 border-gray-400 w-3/4 mt-4 mb-6" />
      </div>
      <div className="mb-10 2xs:container 3xs:p-4 p-0">
        <h4 className="text-2xl text-secondary font-medium">
          Campos similares que te pueden interesar
        </h4>
        <CardSlider />
      </div> */}
    </>
  );
}

export default FarmView;
