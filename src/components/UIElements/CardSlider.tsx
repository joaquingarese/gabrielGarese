import React, { useEffect, useRef, useState } from 'react';
import CardFarm from '../farms/CardFarm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CardSlider() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const farmsPropertiesExample = [
    {
      state: 'Soriano',
      country: 'Uruguay',
      type: 'farm',
      id: '583309'
    },
    {
      state: 'Artigas',
      country: 'Paraguay',
      type: 'farm',
      id: '19471'
    },
    {
      state: 'Florida',
      country: 'Uruguay',
      type: 'farm',
      id: '311551'
    },
    {
      state: 'Artigas',
      country: 'Paraguay',
      type: 'farm',
      id: '19431'
    },
    {
      state: 'Artigas',
      country: 'Paraguay',
      type: 'farm',
      id: '13471'
    },
    {
      state: 'Artigas',
      country: 'Paraguay',
      type: 'farm',
      id: '19571'
    }
  ];

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          loop={true}
        >
          {farmsPropertiesExample.map((farm) => (
            <SwiperSlide
              key={farm.id}
              className="text-center text-2xl flex justify-center items-center"
            >
              <CardFarm property={farm} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          loop={true}
        >
          {farmsPropertiesExample.map((farm, index) => (
            <SwiperSlide
              key={index}
              className="text-center text-2xl flex justify-center items-center p-6"
            >
              <CardFarm property={farm} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <style jsx global>{`
        .swiper-pagination-bullets {
          bottom: -5px !important;
        }
      `}</style>
    </>
  );
}

export default CardSlider;
