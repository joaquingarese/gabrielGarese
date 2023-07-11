import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperClass from 'swiper/types/swiper-class';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperHeight, setSwiperHeight] = useState('500px');

  const updateActiveIndex = (index: number) => {
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
    <div className="">
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
                <Image
                  src={images[activeIndex]}
                  alt="Selected"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} onClick={() => updateActiveIndex(index)}>
                <div className="mt-2 mb-4" role="button">
                  <Image
                    src={image}
                    alt={`Thumbnail ${index}`}
                    layout="responsive"
                    objectFit="cover"
                    width={170}
                    height={80}
                  />
                </div>
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
                <div className="h-[250px] sm:h-[350px] w-full">
                  <Image src={image} alt={`Thumbnail ${index}`} layout="fill" objectFit="cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
