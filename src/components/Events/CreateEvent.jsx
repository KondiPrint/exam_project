'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/app/lib/useRequestData';
import Link from 'next/link';

export default function CreateEvent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [destination, setDestination] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [distance, setDistance] = useState('');
  const [image, setImage] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: categories,
    isLoading: loadingCategories,
    error: categoriesError,
    makeRequest: makeRequestCat,
  } = useRequestData();

  useEffect(() => {
    makeRequestCat('http://localhost:5888/eventcategories', 'GET');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setErrorMessage('');

    // Validering, tjekker om alle felter er udfyldt
    if (
      !title.trim() ||
      !content.trim() ||
      !category ||
      !eventDate ||
      !destination ||
      !coordinates ||
      !distance ||
      !image ||
      !difficulty
    ) {
      setErrorMessage('Alle felter skal udfyldes');
      return;
    }

    /* Opretter et FormData for at kunne sende fil (billede). https://developer.mozilla.org/en-US/docs/Web/API/FormData + https://www.youtube.com/watch?v=xqa8_oRBRDE */
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('eventdate', eventDate);
    formData.append('destination', destination);
    formData.append('coordinates', coordinates);
    formData.append('distance', distance);
    formData.append('image', image);
    formData.append('difficulty', difficulty);

    try {
      await makeRequest('http://localhost:5888/events/admin', 'POST', formData);
      resetForm();
      setMessage('Eventet er blevet tilføjet!');
    } catch (error) {
      setErrorMessage('Der opstod en fejl ved tilføjelsen af eventen.');
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('');
    setEventDate('');
    setDestination('');
    setCoordinates('');
    setDistance('');
    setImage(null);
    setDifficulty('');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1 className='text-center text-3xl py-10'>Create Event</h1>
      <div className='px-4 space-y-5 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        {errorMessage && (
          <div role='alert' className='alert alert-error text-white mb-10'>
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
            className='alert alert-success text-white justify-center flex w-fit mx-auto mb-10'>
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
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className='form-control px-4 pb-20 space-y-5 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <div className='flex flex-wrap sm:flex-nowrap gap-5'>
          <div className='relative indicator w-full'>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='title'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
              Titel:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>

          <div>
            <select
              className='select select-bordered'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value=''>Select a category</option>
              {categories &&
                categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.category}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className='relative indicator w-full'>
          <textarea
            name='content'
            id='content'
            rows='4'
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder=' '
            className='textarea textarea-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'></textarea>
          <label
            htmlFor='content'
            className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
            Indhold:
          </label>
          <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
        </div>

        <div className='flex flex-wrap sm:flex-nowrap gap-5'>
          <div className='relative indicator w-full'>
            <input
              type='date'
              name='date'
              id='date'
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='date'
              className='absolute -top-3 -left-1 bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
              Event Date:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>

          <div className='relative indicator w-full'>
            <input
              type='number'
              name='difficulty'
              id='difficulty'
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              required
              min='1'
              max='10'
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='difficulty'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
              Difficulty (1-10):
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>
        </div>

        <div className='flex flex-wrap sm:flex-nowrap gap-5'>
          <div className='relative indicator w-full'>
            <input
              type='text'
              name='destination'
              id='destination'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='destination'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
              Destination:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>

          <div className='relative indicator w-full'>
            <input
              type='number'
              name='distance'
              id='distance'
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              required
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='distance'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
              Distance (in km):
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>
        </div>

        <div className='relative indicator w-full'>
          <input
            type='text'
            name='coordinates'
            id='coordinates'
            value={coordinates}
            onChange={(e) => setCoordinates(e.target.value)}
            required
            placeholder=' '
            className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
          />
          <label
            htmlFor='coordinates'
            className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
            Coordinates:
          </label>
          <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
        </div>

        <div className='relative indicator w-full'>
          <input
            type='file'
            name='image'
            id='image'
            onChange={handleImageChange}
            required
            placeholder=' '
            className='file-input file-input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
          />
          <label
            htmlFor='image'
            className='absolute -top-3 -left-1 peer-valid:-top-3 peer-valid:-left-1 bg-base-100 peer-valid:bg-base-100 px-1 rounded-br-xl'>
            image:
          </label>
          <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
        </div>

        <button type='submit' className='btn btn-primary hover:animate-heartbeat'>
          Opret Event
        </button>
      </form>
      <Link href='/events' className='btn btn-info hover:animate-heartbeat mx-10 mb-10'>
        Tilbage til Events
      </Link>
    </div>
  );
}
