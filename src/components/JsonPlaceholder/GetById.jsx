'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function JsonGetPostById({ data }) {
  const router = useRouter();
  return (
    <>
      <h2>Post {data.id}</h2>
      <div className='p-2'>
        {data && (
          <div className='card bg-base-100 w-fit shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>{data.title}</h2>
              <p>{data.body}</p>
              <div className='card-actions justify-end'>
                <button onClick={router.back} className='btn btn-primary'>
                  Go back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
