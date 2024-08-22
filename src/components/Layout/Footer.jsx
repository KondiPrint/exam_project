'use client';
import useRequestData from '@/app/lib/useRequestData';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaHouseChimney, FaChevronRight } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import Lightbox from '../Gallery/Lightbox';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Footer() {
  const [randomImages, setRandomImages] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [sortedEvents, setSortedEvents] = useState([]);

  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: dataEvents,
    isLoading: isLoadingEvents,
    error: errorEvents,
    makeRequest: makeRequestEvents,
  } = useRequestData();

  const navLinks = [
    { name: 'Forside', href: '/' },
    { name: 'Om os', href: '/omos' },
    { name: 'Events', href: '/events' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Nyheder', href: '/nyheder' },
  ];

  useEffect(() => {
    makeRequest('http://localhost:5888/contactinformation');
  }, []);

  useEffect(() => {
    makeRequestEvents('http://localhost:5888/events');
  }, []);

  useEffect(() => {
    if (dataEvents && dataEvents.length > 0) {
      const shuffled = [...dataEvents].sort(() => 0.5 - Math.random());
      const selectedImages = shuffled.slice(0, 6);
      setRandomImages(
        selectedImages.map((event) => `http://localhost:5888/images/event/${event.image}`)
      );
    }
  }, [dataEvents]);

  useEffect(() => {
    if (dataEvents && dataEvents.length > 0) {
      const now = new Date();
      const upcomingEvents = dataEvents
        .filter((event) => parseISO(event.eventdate) > now)
        .sort((a, b) => parseISO(a.eventdate) - parseISO(b.eventdate))
        .slice(0, 4);
      setSortedEvents(upcomingEvents);
    }
  }, [dataEvents]);

  const handleImageClick = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className='bg-gradient-to-tr from-[#061019] to-[#0c2539]'>
      <div className='bg-topo-pattern '>
        <div className='px-4 py-20 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
          <footer className='text-accent px-4'>
            <div className='footer border-b-[1px] border-secondary border-opacity-25 auto-cols-fr pb-10'>
              {data && (
                <aside className='space-y-5 text-accent'>
                  <div className='size-1/3 md:size-2/3'>
                    <Image
                      src={'/assets/image/logo.png'}
                      width={400}
                      height={400}
                      alt='BikeLane-logo'
                      className=''
                    />
                  </div>
                  <p>{data.companypayoff}</p>
                  <div className='space-y-2 font-semibold'>
                    <div className='flex gap-1 items-center'>
                      <div className='bg-slate-800 p-2 rounded-full'>
                        <FaHouseChimney className='text-primary' />
                      </div>
                      <div>
                        <p className='text-xs'>Klubhuset:</p>
                        <address className='not-italic text-xs'>
                          {data.address}, {data.zipcity}
                        </address>
                      </div>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <div className='bg-slate-800 p-2 rounded-full'>
                        <IoIosMail className='text-primary' />
                      </div>
                      <p className='text-xs'>{data.email}</p>
                    </div>
                  </div>
                </aside>
              )}

              <nav className='w-full'>
                <h6 className='text-white text-lg font-bold border-b-[1px] w-full border-secondary border-opacity-25 pb-5'>
                  Kommende events
                </h6>
                <ul className='flex-col flex gap-3 mt-5 font-semibold space-y-3'>
                  {sortedEvents.map((event, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <Link
                        href={'/events'}
                        className='group flex items-center gap-2 hover:text-primary'>
                        <FaChevronRight className='size-3 text-primary group-hover:translate-x-1 transition-all' />
                        {event.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav className='w-full'>
                <h6 className='text-white text-lg font-bold border-b-[1px] w-full border-secondary border-opacity-25 pb-5'>
                  Indhold
                </h6>
                <ul className='flex-col flex gap-3 mt-5 font-semibold'>
                  {navLinks.map((links, index) => (
                    <li key={index} className='flex items-center gap-2'>
                      <Link
                        href={links.href}
                        className='group flex items-center gap-2 hover:text-primary'>
                        <FaChevronRight className='size-3 text-primary group-hover:translate-x-1 transition-all' />
                        {links.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className=''>
                <h6 className='text-white text-lg font-bold border-b-[1px] w-full border-secondary border-opacity-25 pb-5'>
                  Galleri
                </h6>
                <aside className='grid grid-cols-3 w-full gap-2 pt-5 mb-14'>
                  {randomImages.map((image, index) => (
                    <figure
                      key={index}
                      onClick={() => handleImageClick(image)}
                      className='flex flex-col justify-center items-center overflow-hidden rounded-md relative group cursor-pointer'>
                      <Image
                        src={image}
                        width={800}
                        height={800}
                        alt={`Event ${index}`}
                        className='rounded-md size-full aspect-video group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700'
                      />
                      <div className='size-full bg-black top-0 right-0 absolute group-hover:bg-opacity-30 group-hover:opacity-100 opacity-0 m-0 justify-center items-center flex'>
                        <div className='text-6xl text-white'></div>
                      </div>
                    </figure>
                  ))}
                </aside>
              </nav>
            </div>
          </footer>

          <footer className='footer px-4 pt-10'>
            <p className='text-accent'>© Copyright 2012 Bikelane.</p>
          </footer>
        </div>
      </div>

      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
}
