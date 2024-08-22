'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { FaPlay } from 'react-icons/fa';
import Header from '../Layout/Header';

export default function ForsideHero({ data }) {
  const slicedMobileHeroText = data?.title.split('for')[0] + 'for';
  return (
    <>
      <section className='bg-grey-bg px-4 pb-20 space-y-10 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <Header />
        <div className='sm:grid sm:grid-cols-2 sm:gap-5 sm:items-center space-y-10'>
          <div className='max-w-xl'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>
              {slicedMobileHeroText} <span className='text-primary md:hidden'>Grupper</span>{' '}
              <span className='text-primary hidden md:flex'>Alle</span>
            </h1>
            <p className='my-6 text-secondary font-archivo'>{data?.content}</p>
            <Link
              href={data?.buttonlink}
              className='btn rounded-md font-archivo font-medium btn-primary text-white px-6 border-none hover:bg-white hover:text-primary hover:-translate-y-1'>
              {data?.buttontext}
            </Link>
          </div>

          <div className='relative w-fit mx-auto '>
            <Image
              src={'http://localhost:5888/images/hero/hero1.jpg'}
              alt='Test'
              width={800}
              height={800}
              className='rounded-xl shadow-sm aspect-square object-cover brightness-105 md:size-full'
            />
            {/* https://refine.dev/blog/tailwind-animations/#animate-ping */}
            <div className='flex justify-center absolute right-5 top-5'>
              <div className='relative flex'>
                <span className='btn btn-circle absolute inline-flex text-primary animate-ping opacity-60'></span>
                <button
                  className='btn btn-circle relative inline-flex text-primary hover:text-white hover:bg-primary border-none'
                  onClick={() => document.getElementById('my_modal_1').showModal()}>
                  <FaPlay className='size-3' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <dialog id='my_modal_1' className='modal p-2 bg-black bg-opacity-80'>
        <div className='modal-box max-w-none sm:size-9/12 p-0'>
          <form method='dialog'>
            <button className='btn btn-sm rounded-none border-none bg-black text-white absolute right-0 top-0'>
              X
            </button>
          </form>
          <Suspense
            fallback={
              <div className='skeleton size-32'>
                <p>Loading video...</p>
              </div>
            }>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/H55W1NhAbQo?si=IbVSJVMl1tZh5L1d'
              title='YouTube video player'
              allow='web-share; fullscreen'
              referrerPolicy='strict-origin-when-cross-origin'
              aria-hidden='false'
              tabIndex='0'
              allowFullScreen></iframe>
          </Suspense>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
