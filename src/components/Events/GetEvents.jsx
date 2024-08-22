'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AmountPerSite from '../Pagination/AmountPerSite';
import PrevNext from '../Pagination/Prev_Next';
import Search from '../Pagination/Search';
import Image from 'next/image';

export default function GetEvents({ data, dataTxt }) {
  const [amountPerSite, setAmountPerSite] = useState(9);
  const [currentSite, setCurrentSite] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [filteredData, setFilteredData] = useState([]);

  const sliceData = (dataToSlice) => {
    return dataToSlice.slice(
      currentSite * amountPerSite,
      currentSite * amountPerSite + amountPerSite
    );
  };

  useEffect(() => {
    let processedData = [...data];

    if (selectedCategory && selectedCategory !== 'Alle') {
      processedData = processedData.filter((event) => event.category.category === selectedCategory);
    }

    if (searchTerm) {
      processedData = processedData.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(processedData);
  }, [data, searchTerm, selectedCategory]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  /* https://stackoverflow.com/questions/69000871/get-unique-category-property-values-from-an-array */
  const uniqueCategories = [...new Set(data.map((event) => event.category.category))];

  return (
    <>
      <section className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <div className='flex justify-center md:justify-between items-center flex-wrap gap-3 p-4'>
          <AmountPerSite setAmountPerSite={setAmountPerSite} setCurrentSite={setCurrentSite} />
          <div className='flex gap-4 p-4 flex-wrap justify-center'>
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                className={`text-secondary relative group ${
                  selectedCategory === category
                    ? 'border-b-[1px] border-secondary hover:border-opacity-0'
                    : ''
                }`}
                onClick={() => setSelectedCategory(category)}>
                {category}
                {/* https://birdeatsbug.com/blog/creating-hover-effects-with-tailwind-css */}
                <span className='absolute -bottom-0 left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-200'></span>
                <span className='absolute -bottom-0 right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-200'></span>
              </button>
            ))}
          </div>
          <Search setSearchTerm={setSearchTerm} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredData &&
            sliceData(filteredData).map((event, index) => (
              <Link href={`/events/${event._id}`} key={event._id} className='group'>
                <div className='space-y-2'>
                  <figure className='flex flex-col justify-center items-center overflow-hidden rounded-md relative'>
                    <Image
                      src={`http://localhost:5888/images/event/${event.image}`}
                      width={600}
                      height={600}
                      alt='Test'
                      className='aspect-video rounded-lg group-hover:scale-125 group-hover:-rotate-3 transition-all duration-1000'
                    />
                    <div className='size-full bg-indigo-950 top-0 right-0 absolute group-hover:bg-opacity-60 group-hover:opacity-100 opacity-0 m-0 justify-center items-center flex'>
                      <div className='text-6xl text-white'></div>
                    </div>
                  </figure>
                  <div className=''>
                    <span className='text-primary text-xs'>
                      {formatDate(event.eventdate)} | Målgruppe: {event.category.category}
                    </span>
                    <h2 className='card-title'>{event.title}</h2>
                    <div className='card-actions justify-end'></div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div className='text-black'>
          <PrevNext
            setCurrentSite={setCurrentSite}
            currentSite={currentSite}
            dataLength={filteredData.length}
            amountPerSite={amountPerSite}
          />
        </div>
      </section>
    </>
  );
}
