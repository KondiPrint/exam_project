'use client';

import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Slider from '../Gallery/Slider';

export default function Events({ data, dataTxt }) {
  return (
    <>
      <section className='mb-20'>
        <div className='space-y-5 bg-indigo-950 px-4 py-24 md:flex md:justify-between sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
          <div className='md:w-1/2'>
            <h3 className='text-primary'>{dataTxt.suptitle}</h3>
            <h2 className='text-3xl font-bold font-lexend text-white'>{dataTxt.title}</h2>
          </div>

          <Link
            href={dataTxt.buttonlink}
            className='btn rounded-md font-archivo font-medium btn-primary text-white px-6 hover:bg-white hover:text-primary hover:-translate-y-1'>
            {dataTxt.buttontext}
          </Link>
        </div>
        <div className='-mt-10 px-4 lg:px-20 xl:px-32 2xl:px-36'>
          <Slider data={data} dataTxt={dataTxt} />
        </div>
      </section>
    </>
  );
}
