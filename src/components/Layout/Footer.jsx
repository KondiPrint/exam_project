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

  // Fetch data
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

  // Select 6 random images from the dataEvents array
  useEffect(() => {
    if (dataEvents && dataEvents.length > 0) {
      const shuffled = [...dataEvents].sort(() => 0.5 - Math.random()); // Shuffle the array
      const selectedImages = shuffled.slice(0, 6); // Get the first 6 elements
      setRandomImages(
        selectedImages.map((event) => `http://localhost:5888/images/event/${event.image}`)
      ); // Construct full image URLs
    }
  }, [dataEvents]);

  // Sort and filter events to show the closest 4 upcoming events
  useEffect(() => {
    if (dataEvents && dataEvents.length > 0) {
      const now = new Date();
      const upcomingEvents = dataEvents
        .filter((event) => parseISO(event.eventdate) > now) // Filter out past events
        .sort((a, b) => parseISO(a.eventdate) - parseISO(b.eventdate)) // Sort by event date
        .slice(0, 4); // Select the top 4 upcoming events
      setSortedEvents(upcomingEvents);
    }
  }, [dataEvents]);

  const handleImageClick = (image) => {
    setLightboxImage(image); // Set the full image URL
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className='bg-gradient-to-tr from-[#061019] to-[#0c2539]'>
      <div className='bg-topo-pattern '>
        <div className='px-4 py-20 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
          <footer className='text-accent px-4'>
            <div className='footer border-b-[1px] border-secondary border-opacity-25 auto-cols-fr'>
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
                      <FaChevronRight className='size-3 text-primary' />
                      {event.title}
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
                      <FaChevronRight className='size-3 text-primary' />
                      <Link href={links.href} className='link link-hover'>
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
                    <Image
                      key={index}
                      src={image}
                      width={800}
                      height={800}
                      alt={`Event ${index}`}
                      className='rounded-md size-full cursor-pointer aspect-video'
                      onClick={() => handleImageClick(image)} // Pass the full image URL
                    />
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

      {/* Render Lightbox if an image is clicked */}
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
}
