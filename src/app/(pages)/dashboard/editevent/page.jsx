'use client';

import React, { useState, useEffect } from 'react';
import DeleteEvent from '@/components/Events/DeleteEvent';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import AmountPerSite from '@/components/Pagination/AmountPerSite';
import PrevNext from '@/components/Pagination/Prev_Next';

export default function EditEvent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSite, setCurrentSite] = useState(0);
  const [amountPerSite, setAmountPerSite] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5888/events');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const sliceData = (dataToSlice) => {
    return dataToSlice.slice(
      currentSite * amountPerSite,
      currentSite * amountPerSite + amountPerSite
    );
  };

  if (isLoading)
    return (
      <div>
        Loading... <span className='loading loading-spinner loading-md'></span>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <aside className='flex flex-col gap-5 mb-10 px-4'>
        <AmountPerSite setAmountPerSite={setAmountPerSite} setCurrentSite={setCurrentSite} />

        <Link
          href='/dashboard/editposts/addpost'
          className='text-current btn btn-lg sm:btn-block btn-primary hover:animate-heartbeat'>
          <FaPlus size='1.5em' />
        </Link>
      </aside>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {sliceData(data).map((event, index) => (
          <div key={event._id} className='card bg-base-100 w-full shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>{event.title}</h2>

              <div className='card-actions justify-between'>
                <DeleteEvent eventId={event._id} />
                <button className='btn btn-small btn-ghost'>
                  <Link href={`/dashboard/editevent/${event._id}`}>
                    <FaEdit className='text-green-800 size-8' />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className='card card-compact w-auto bg-base-100 shadow-2xl'>
          <div className='card-body items-center text-center'>
            <div className='card-title skeleton h-4 w-28'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='card-actions pt-2 w-full'>
              <Link
                href='/dashboard/editposts/addpost'
                className='text-current btn btn-block btn-primary hover:animate-heartbeat'>
                <FaPlus size='1.5em' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PrevNext
        setCurrentSite={setCurrentSite}
        currentSite={currentSite}
        dataLength={data.length}
        amountPerSite={amountPerSite}
      />
    </>
  );
}
