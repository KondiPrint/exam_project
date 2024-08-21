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

    // Filter data based on selected category
    if (selectedCategory && selectedCategory !== 'Alle') {
      processedData = processedData.filter((event) => event.category.category === selectedCategory);
    }

    // Filter data based on search term
    if (searchTerm) {
      processedData = processedData.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(processedData);
  }, [data, searchTerm, selectedCategory]);

  // Function to format the date in Danish format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Get unique categories from the data
  const uniqueCategories = [...new Set(data.map((event) => event.category.category))];

  const catList = uniqueCategories.sort();

  return (
    <>
      <section className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <div className='flex justify-center md:justify-between items-center flex-wrap gap-3 p-4'>
          <AmountPerSite setAmountPerSite={setAmountPerSite} setCurrentSite={setCurrentSite} />
          <div className='flex gap-4 p-4 flex-wrap justify-center'>
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                className={`text-secondary ${
                  selectedCategory === category ? 'border-b-[1px] border-secondary' : ''
                }`}
                onClick={() => setSelectedCategory(category)}>
                {category}
              </button>
            ))}
          </div>
          <Search setSearchTerm={setSearchTerm} />
        </div>

        {/* Category Filter */}

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredData &&
            sliceData(filteredData).map((event, index) => (
              <Link
                href={`/events/${event._id}`}
                key={event._id}
                className='hover:scale-105 transition-all'>
                <div className='space-y-2'>
                  <figure className=''>
                    <Image
                      src={`http://localhost:5888/images/event/${event.image}`}
                      width={600}
                      height={600}
                      alt='Test'
                      className='aspect-video rounded-lg'
                    />
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
        <PrevNext
          setCurrentSite={setCurrentSite}
          currentSite={currentSite}
          dataLength={filteredData.length}
          amountPerSite={amountPerSite}
        />
      </section>
    </>
  );
}
