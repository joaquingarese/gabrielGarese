import React, { SetStateAction, Dispatch, useState, useEffect } from 'react';
import SwiperCore, { Navigation, Thumbs, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Thumbs]);

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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
    <div>
      {isLargeScreen ? (
        <>
          <Swiper
            style={{
              width: '100%',
              height: '400px'
            }}
            spaceBetween={12}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Image ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper as Dispatch<SetStateAction<SwiperClass | null>>}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={5}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Thumbnail ${index}`} className="mt-2 mb-4" />
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
