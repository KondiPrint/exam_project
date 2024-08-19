'use client';

import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

register();
export default function Events({ data, dataTxt }) {
  const slicedData = data.slice(0, 4);
  const swiperElRef = useRef(null);

  return (
    <>
      <section className=''>
        <div className=' bg-sky-950 px-4'>
          <h3 className='text-primary'>{dataTxt.suptitle}</h3>
          <h2 className='text-white'>{dataTxt.title}</h2>
          <Link href={dataTxt.buttonlink} className='btn btn-primary text-white rounded-md px-6'>
            {dataTxt.buttontext}
          </Link>
        </div>

        <div className='w-11/12 mx-auto'>
          <swiper-container
            ref={swiperElRef}
            slides-per-view='3'
            loop='true'
            speed='1000'
            autoplay='true'
            autoplay-delay='3000'>
            {slicedData &&
              slicedData.map((slide, id) => (
                <swiper-slide key={id}>
                  <Image
                    src={`http://localhost:5888/images/event/${slide.image}`}
                    width={200}
                    height={200}
                    alt='test'
                    className='self-center'
                  />
                </swiper-slide>
              ))}
          </swiper-container>
        </div>
      </section>
    </>
  );
}
