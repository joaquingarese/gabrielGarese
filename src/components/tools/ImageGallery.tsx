import React, { SetStateAction, Dispatch, useState, useEffect } from 'react';
import SwiperCore, { Navigation, Thumbs, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import 'swiper/swiper-bundle.min.css';

// SwiperCore.use([Navigation, Thumbs]);

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperHeight, setSwiperHeight] = useState('500px');

  const updateActiveIndex = (index: number) => {
    console.log(index);
    setActiveIndex(index);
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      setSwiperHeight(window.innerWidth > 1536 ? '500px' : '400px');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div>
      {isLargeScreen ? (
        <>
          <Swiper
            style={{
              width: '100%',
              height: swiperHeight
            }}
            spaceBetween={12}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={images[activeIndex]} alt="Selected" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper as Dispatch<SetStateAction<SwiperClass | null>>}
            spaceBetween={10}
            slidesPerView={5}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} onClick={() => updateActiveIndex(index)}>
                <img src={image} alt={`Thumbnail ${index}`} className="mt-2 mb-4" role="button" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <Swiper
            pagination={{
              type: 'fraction'
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mb-4"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="text-center text-lg flex justify-center items-center"
              >
                <img src={image} alt={`Thumbnail ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
