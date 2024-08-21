'use client';

import React, { useState, useEffect } from 'react';
import DeleteEvent from '@/components/Events/DeleteEvent';
import { FaEdit, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import AmountPerSite from '@/components/Pagination/AmountPerSite';
import PrevNext from '@/components/Pagination/Prev_Next';

export default function GetEventsAdmin({ data }) {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSite, setCurrentSite] = useState(0);
  const [amountPerSite, setAmountPerSite] = useState(5);

  useEffect(() => {
    if (data) {
      setEvents(data);
      setIsLoading(false);
    } else {
      setError('Kunne ikke loade events.');
      setIsLoading(false);
    }
  }, [data]);

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
        <div className='bg-white rounded-full w-fit px-4 mx-auto'>
          <AmountPerSite setAmountPerSite={setAmountPerSite} setCurrentSite={setCurrentSite} />
        </div>

        <Link
          href='/dashboard/editevent/addevent'
          className='text-current btn btn-lg sm:btn-block btn-primary hover:animate-heartbeat text-white'>
          <FaPlus size='1.5em' />
        </Link>
      </aside>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {sliceData(events).map((event, index) => (
          <div key={event._id} className='card bg-base-100 w-full shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>{event.title}</h2>
            </div>
            <div className='join w-full'>
              <div className='join-item btn btn-ghost w-1/2 rounded-2xl rounded-tl-none'>
                <DeleteEvent eventId={event._id} />
              </div>
              <Link
                href={`/dashboard/editevent/${event._id}`}
                className='join-item w-1/2 btn btn-ghost rounded-2xl rounded-tr-none'>
                <FaEdit className='text-success size-8' />
              </Link>
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
                href='/dashboard/editevent/addevent'
                className='text-current btn btn-block btn-primary hover:animate-heartbeat text-white'>
                <FaPlus size='1.5em' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='text-white'>
        <PrevNext
          setCurrentSite={setCurrentSite}
          currentSite={currentSite}
          dataLength={events.length}
          amountPerSite={amountPerSite}
        />
      </div>
    </>
  );
}
