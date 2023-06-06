import React from 'react';
import CardSlider from '../tools/CardSlider';
import ImageGallery from '../tools/ImageGallery';
import { CattleType } from '~/pages/types';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { GiBull } from 'react-icons/gi';
import BlockContent from '@sanity/block-content-to-react';

interface CattleDetailsProps {
  cattle: CattleType;
}

function CattleView({ cattle }: CattleDetailsProps) {
  console.log(cattle);

  const images = [
    '/images/cascoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/cascoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/campoPrueba.jpg'
  ];

  return (
    <>
      <div className="flex flex-col container mt-32 md:mt-10 ">
        <h3 className="text-2xl md:text-3xl mb-6 font-navbar block">{cattle.name}</h3>
        <span className="mb-2">
          <MdLocationOn size={24} className="text-secondary inline mr-2" />
          {cattle.state.name}
          {' > '} Ganado{' > '}
          {cattle.race}
        </span>
        <div className="w-full md:w-3/4">
          {cattle.video.url === null ? (
            <ImageGallery images={images} />
          ) : (
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${cattle.video.url}?autoplay=1&mute=1&loop=1&playlist=<Video_ID>`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        <p className="mt-1">
          <small>
            <i>
              Fecha de publicación: {new Date(cattle._updatedAt.toString()).toLocaleDateString()}
            </i>
          </small>
        </p>
        <section className="my-3 mb-10">
          <div className="mb-4">
            <h4 className="text-2xl text-secondary font-medium my-2">Descripción</h4>
            <BlockContent blocks={cattle.detail} />
          </div>
          <h4 className="text-secondary font-medium my-2">Información Adicional</h4>
          <span className="flex items-center mt-2">
            <GiBull size={24} className="mt-2 mr-2" /> {cattle.size} Cabezas de Ganado
            <BsArrowRightShort size={26} className="mt-1 ml-4 mr-1" />
            <span className="">{cattle.category}</span>{' '}
          </span>
        </section>
      </div>
      {/* <div className="flex flex-col items-center">
        <hr className="border-solid border-2 border-gray-300 w-10/12 px-6" />
        <hr className="border-solid border-1 border-gray-400 w-3/4 mt-4 mb-6" />
      </div> */}

      {/* <div className="mb-10 container">
        <h4 className="text-2xl text-secondary font-medium">
          Campos similares que te pueden interesar
        </h4>
        <CardSlider />
      </div> */}
    </>
  );
}

export default CattleView;
