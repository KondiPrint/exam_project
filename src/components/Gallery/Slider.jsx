import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

export default function Slider({ data, dataTxt }) {
  const [randomEvent, setRandomEvent] = useState([]);
  const slicedData = data.slice(0, 4);

  useEffect(() => {
    if (data && data.length > 0) {
      const shuffledEvent = [...data].sort(() => 0.5 - Math.random());

      setRandomEvent(shuffledEvent);
    }
  }, [data]);

  return (
    <>
      {/* https://swiperjs.com/demos + https://swiperjs.com/react + https://www.youtube.com/watch?v=imhdh4xCh7I */}
      <aside className=''>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            modifier: 1,
            depth: 100,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, EffectCoverflow, Navigation]}
          className='mySwiper'>
          {randomEvent &&
            randomEvent.map((slide, index) => (
              <SwiperSlide key={index}>
                <figure className='flex flex-col justify-center items-center space-y-3 p-8'>
                  <Image
                    src={`http://localhost:5888/images/event/${slide.image}`}
                    width={800}
                    height={800}
                    alt='Slider image'
                    className='aspect-video object-cover size-full rounded-md '
                  />
                  <figcaption className='w-full'>
                    <h3 className='text-primary text-xs'>{slide.destination}</h3>
                    <h2 className='text-sm font-bold'>{slide.title}</h2>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
        </Swiper>
      </aside>
    </>
  );
}
