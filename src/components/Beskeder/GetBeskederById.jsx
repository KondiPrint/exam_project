'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import useRequestData from '@/app/lib/useRequestData';
import { useParams } from 'next/navigation';

export default function GetBeskederById() {
  const { id } = useParams();
  const { data, isLoading, error, makeRequest } = useRequestData();
  useEffect(() => {
    if (id) {
      makeRequest(`http://localhost:5888/inqueries/admin/${id}`, 'GET');
    }
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  return (
    <>
      <article className='py-5 px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        {data && (
          <div className='w-fit sm:w-96 h-full p-4 bg-blue-bg rounded-lg mx-auto'>
            <span className='text-primary font-bold'>{formatDate(data.received)}</span>
            <div className='py-5 space-y-2'>
              <div className=''>
                <span className='text-primary font-bold'>Navn:</span>
                <h2 className='bg-white p-2 border-1 border-black rounded-lg'>{data.name}</h2>
              </div>
              <div className=''>
                <span className='text-primary font-bold'>Email:</span>
                <h3 className='bg-white p-2 border-1 border-black rounded-lg'>{data.email}</h3>
              </div>
            </div>
            <span className=''>
              <span className='text-primary font-bold'>Besked:</span>
              <p className='bg-white p-2 border-1 border-black w-full h-fit rounded-lg text-secondary'>
                {data.message}
              </p>
            </span>
            <Link className='btn btn-primary text-white mt-10' href={'/dashboard/beskeder'}>
              Tilbage til beskeder
            </Link>
          </div>
        )}
      </article>
    </>
  );
}
