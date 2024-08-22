import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Slider({ data, dataTxt }) {
  const [randomEvent, setRandomEvent] = useState([]);

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
          navigation={true}
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
                <Link href={'/events'} className='group p-8'>
                  <figure className='flex flex-col justify-center items-center overflow-hidden rounded-md relative'>
                    <Image
                      src={`http://localhost:5888/images/event/${slide.image}`}
                      width={800}
                      height={800}
                      alt='Slider image'
                      className='aspect-video object-cover size-full group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 '
                    />
                    <div className='size-full bg-indigo-950 top-0 right-0 absolute group-hover:bg-opacity-60 group-hover:opacity-100 opacity-0 m-0 justify-center items-center flex'>
                      <div className='text-6xl text-white'>+</div>
                    </div>
                  </figure>
                  <p className='w-full pt-5'>
                    <h3 className='text-primary text-xs'>{slide.destination}</h3>
                    <h2 className='text-sm font-bold'>{slide.title}</h2>
                  </p>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </aside>
    </>
  );
}
