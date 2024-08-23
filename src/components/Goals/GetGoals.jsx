'use client';

import React, { useState, useEffect } from 'react';
import DeleteEvent from '@/components/Events/DeleteEvent';
import { FaEdit, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import AmountPerSite from '@/components/Pagination/AmountPerSite';
import PrevNext from '@/components/Pagination/Prev_Next';

export default function GetGoalsAdmin({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    } else {
      setError('Kunne ikke loade Goals.');
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading)
    return (
      <div>
        Loading... <span className='loading loading-spinner loading-md'></span>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        {data.map((goals, index) => (
          <div key={goals._id} className='card bg-base-100 w-full shadow-xl'>
            <div className='card-body'>
              <h2 className='text-center font-bold text-3xl'>{goals.goal}</h2>
            </div>
            <Link
              href={`/dashboard/editgoals/${goals._id}`}
              className='btn btn-block btn-ghost rounded-2xl rounded-t-none'>
              <FaEdit className='text-success size-8' />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
