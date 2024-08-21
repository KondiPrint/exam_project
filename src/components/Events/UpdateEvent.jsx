'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/app/lib/useRequestData';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function UpdateEvent() {
  const { id } = useParams();

  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: dataPUT,
    isLoading: isLoadingPUT,
    error: errorPUT,
    makeRequest: makeRequestPUT,
  } = useRequestData();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Clear previous messages and data
    setMessage('');
    setErrorMessage('');

    if (!title.trim() || !body.trim()) {
      setErrorMessage('Titel og indhold må ikke være tomme!');
      return;
    }

    try {
      await makeRequestPUT(`http://localhost:5888/events/admin/${id}`, 'PUT', {
        title,
        body,
      });
      setMessage('Event er rettet uden problem');
    } catch (error) {
      console.error('Fejl i rettelse af event:', error);
      setErrorMessage('Kunne ikke rette event.');
    }
  };

  useEffect(() => {
    if (id) {
      makeRequest(`http://localhost:5888/events/${id}`, 'GET');
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setBody(data.content);
    }
  }, [data]);

  return (
    <>
      {error && <p className='text-error'>{error}</p>}
      {errorPUT && <p className='text-error'>{errorPUT}</p>}

      <section className='animate-fade-in my-10 p-2 space-y-5'>
        {errorMessage && (
          <div role='alert' className='alert alert-error mb-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current shrink-0 size-10'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}
        {message && (
          <div
            role='alert'
            className='alert bg-green-800 text-white justify-center flex w-fit mx-auto mb-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current shrink-0 size-10'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>{message}</span>
          </div>
        )}
        <div className='px-4 space-y-5'>
          {/* Only show the card if there's a success message or if data is loaded */}
          {(dataPUT || data) && !errorMessage && (
            <div className='card bg-base-100 w-fit shadow-xl'>
              <div className='card-body'>
                <h2 className='card-title'>{dataPUT?.title || data.title}</h2>
                <p>{dataPUT?.body || data.content}</p>
              </div>
            </div>
          )}

          <form
            className='form-control space-y-5 mb-10 sm:mb-0 py-10'
            onSubmit={handleUpdate}
            noValidate>
            <div className='relative indicator w-full'>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onInput={(e) => setTitle(e.target.value)}
                placeholder=' '
                required
                className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
              />
              <label
                htmlFor='title'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
                Title:
              </label>
            </div>

            <div className='relative indicator w-full'>
              <textarea
                name='content'
                id='content'
                rows='4'
                onInput={(e) => setBody(e.target.value)}
                value={body}
                placeholder=' '
                required
                className='textarea textarea-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'></textarea>
              <label
                htmlFor='content'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
                Content:
              </label>
            </div>

            <div className='text-center flex'>
              <button
                type='submit'
                disabled={isLoadingPUT || isLoading}
                className='text-base text-base-100 btn btn-primary w-full md:w-auto md:justify-start hover:animate-heartbeat'>
                {isLoadingPUT ? 'Retter event...' : 'Event rettet'}
              </button>
            </div>
          </form>

          <Link
            href={'/dashboard/editevent'}
            className='btn btn-warning hover:animate-heartbeat text-white'>
            Tilbage
          </Link>
        </div>
      </section>
    </>
  );
}
