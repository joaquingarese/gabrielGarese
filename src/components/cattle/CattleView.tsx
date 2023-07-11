import BlockContent from '@sanity/block-content-to-react';
import React, { useEffect, useState } from 'react';

import { BsArrowRightShort } from 'react-icons/bs';
import { GiBull } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';

import ImageGallery from '../UIElements/ImageGallery';
import ExtraMiniForm from '../forms/ExtraMiniForm';
import MiniForm from '../forms/MiniForm';

interface CattleDetailsProps {
  cattle: CattleType;
}

function CattleView({ cattle }: CattleDetailsProps) {
  const [imagesSt, setImagesSt] = useState<string[]>([]);

  useEffect(() => {
    const imageURLS = [cattle.image.asset.url];

    cattle.gallery?.forEach((item) => {
      imageURLS.push(item.image.asset.url);
    });

    setImagesSt(imageURLS);
  }, [cattle.gallery, cattle.image.asset.url]);

  return (
    <>
      <div className="flex flex-col 2xs:container 3xs:p-3 mt-32 md:mt-10 ">
        <h3 className="text-2xl md:text-3xl mb-6 font-navbar block">{cattle.name}</h3>
        <span className="mb-2">
          <MdLocationOn size={24} className="text-secondary inline mr-2" />
          {cattle.state.name}
          {' > '} Ganado{' > '}
          {cattle.race}
        </span>
        <div>
          {cattle.video.url === null ? (
            <div className="flex">
              <div className="w-full md:w-3/4 xl:w-8/12 3xl:w-6/12">
                <ImageGallery images={imagesSt} />
              </div>
              <div className="w-1/4 mx-10 hidden xl:block">
                <MiniForm type={'cattle'} property={cattle} />
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap">
              <div
                className="relative w-full md:w-3/4 xl:w-8/12 3xl:w-6/12"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${cattle.video.url}?autoplay=1&mute=1&loop=1&playlist=<Video_ID>`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-1/4 mx-10 hidden xl:block">
                <MiniForm type={'cattle'} property={cattle} />
              </div>
            </div>
          )}
        </div>
        <p className="mt-[-4px]">
          <small>
            <i>
              Fecha de publicación: {new Date(cattle._updatedAt.toString()).toLocaleDateString()}
            </i>
          </small>
        </p>
        <section className="my-3 mb-10">
          <div className="mb-4">
            <h4 className="text-2xl font-title text-secondary font-medium my-2">Descripción</h4>
            <BlockContent blocks={cattle.detail} />
          </div>
          <h4 className="text-xl text-secondary font-title my-2">Información Adicional</h4>
          <span className="flex items-center mt-2">
            <GiBull size={24} className="mt-2 mr-2" /> {cattle.size} Cabezas de Ganado
            <BsArrowRightShort size={26} className="mt-1 ml-4 mr-1" />
            <span className="">{cattle.category}</span>{' '}
          </span>
          <div className="w-full md:w-3/4 block xl:hidden my-8 m-auto">
            <ExtraMiniForm type={'cattle'} property={cattle} />
          </div>
        </section>
      </div>
    </>
  );
}

export default CattleView;
