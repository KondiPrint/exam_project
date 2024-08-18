'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AmountPerSite from '../Pagination/AmountPerSite';
import PrevNext from '../Pagination/Prev_Next';
import Search from '../Pagination/Search';
import Sort from '../Pagination/Sort';

export default function JsonGetPosts({ data }) {
  const [amountPerSite, setAmountPerSite] = useState(5);
  const [currentSite, setCurrentSite] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('id');
  const [filteredData, setFilteredData] = useState([]);

  const sliceData = (dataToSlice) => {
    return dataToSlice.slice(
      currentSite * amountPerSite,
      currentSite * amountPerSite + amountPerSite
    );
  };

  useEffect(() => {
    let processedData = [...data];

    // Filter data based on search term
    if (searchTerm) {
      processedData = processedData.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort data based on criteria
    processedData.sort((a, b) => {
      if (sortCriteria === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortCriteria === 'id') {
        return a.id - b.id;
      }
      return 0;
    });

    setFilteredData(processedData);
  }, [data, searchTerm, sortCriteria]);

  return (
    <>
      <h2>All Posts</h2>

      <div className='flex justify-between items-center flex-wrap gap-3 p-4'>
        <AmountPerSite setAmountPerSite={setAmountPerSite} setCurrentSite={setCurrentSite} />
        <Search setSearchTerm={setSearchTerm} />
        <Sort
          options={[
            { value: 'id', label: 'ID' },
            { value: 'title', label: 'Title' },
          ]}
          setSortCriteria={setSortCriteria}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {filteredData &&
          sliceData(filteredData).map((post) => (
            <div className='card bg-base-100 w-fit shadow-xl' key={post.id}>
              <div className='card-body'>
                <h2 className='card-title'>{post.id}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <div className='card-actions justify-end'>
                  <Link href={`/jsonplaceholder/${post.id}`} className='btn btn-primary'>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <PrevNext
        setCurrentSite={setCurrentSite}
        currentSite={currentSite}
        dataLength={filteredData.length}
        amountPerSite={amountPerSite}
      />
    </>
  );
}
