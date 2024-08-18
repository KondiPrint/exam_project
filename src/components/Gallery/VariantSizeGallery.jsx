'use client';

import Image from 'next/image';
import Link from 'next/link';
import Lightbox from './Lightbox';
import { useState } from 'react';

export default function VariantSizeGallery() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleImageClick = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
      txt: 'Photo by Minh Pham',
      width: '600',
      href: '#',
      cat: 'VR',
    },
    {
      src: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000',
      txt: 'Photo by Magicle',
      width: '1000',
      href: '#',
      cat: 'Tech',
    },
    {
      src: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000',
      txt: 'Photo by Martin Sanchez',
      width: '1000',
      href: '#',
      cat: 'Dev',
    },
    {
      src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600',
      txt: 'Photo by Lorenzo Herrera',
      width: '600',
      href: '#',
      cat: 'Retro',
    },
  ];

  return (
    <>
      <div className='h-full'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8 odd:md:col-span-2'>
            {galleryImages &&
              galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => handleImageClick(img)}
                  className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'>
                  <Image
                    onClick={() => handleImageClick(img)}
                    alt={img.txt}
                    width={img.width}
                    height={img.width}
                    src={img.src}
                    className='absolute inset-0 size-full object-cover object-center transition duration-200 group-hover:scale-110'
                  />
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

                  <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                    {img.cat}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className='h-full'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8'>
            {/* image - start */}
            <Link
              href='#'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'>
              <Image
                src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600'
                loading='lazy'
                width={700}
                height={700}
                alt='Photo by Minh Pham'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

              <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                VR
              </span>
            </Link>
            {/* image - end */}

            {/*  image - start */}
            <Link
              href='#'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'>
              <Image
                src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000'
                loading='lazy'
                width={700}
                height={700}
                alt='Photo by Magicle'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

              <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                Tech
              </span>
            </Link>
            {/* image - end */}

            {/* image - start */}
            <Link
              href='#'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'>
              <Image
                src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000'
                loading='lazy'
                width={700}
                height={700}
                alt='Photo by Martin Sanchez'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

              <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                Dev
              </span>
            </Link>
            {/* image - end */}

            {/* image - start */}
            <Link
              href='#'
              className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80'>
              <Image
                src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600'
                loading='lazy'
                width={700}
                height={700}
                alt='Photo by Lorenzo Herrera'
                className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

              <span className='relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg'>
                Retro
              </span>
            </Link>
            {/* image - end */}
          </div>
        </div>
      </div>

      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </>
  );
}
