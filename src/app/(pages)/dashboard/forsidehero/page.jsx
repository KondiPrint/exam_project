'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/app/lib/useRequestData';
import Link from 'next/link';

export default function UpdateHero() {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: dataPUT,
    isLoading: isLoadingPUT,
    error: errorPUT,
    makeRequest: makeRequestPUT,
  } = useRequestData();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setErrorMessage('');

    /* Validering, tjekker om alle felter er udfyldt */
    if (!title.trim() || !content.trim() || !buttonText || !buttonLink || !image || !videoLink) {
      setErrorMessage('Alle felter skal udfyldes');
      return;
    }

    /* Opretter et FormData for at kunne sende fil (billede). https://developer.mozilla.org/en-US/docs/Web/API/FormData + https://www.youtube.com/watch?v=xqa8_oRBRDE */
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('buttontext', buttonText);
    formData.append('buttonlink', buttonLink);
    formData.append('videolink', videoLink);
    formData.append('image', image);

    try {
      await makeRequestPUT(
        'http://localhost:5888/heroes/admin/653d440a5d213e546d6dd303',
        'PUT',
        formData
      );
      setMessage('Heroen er blevet opdateret');
    } catch (error) {
      setErrorMessage('Der opstod en fejl ved opdateringen af heroen');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    makeRequest(`http://localhost:5888/heroes/653d440a5d213e546d6dd303`, 'GET');
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      setButtonLink(data.buttonlink);
      setButtonText(data.buttontext);
      setVideoLink(data.videolink);
      setImage(data.image);
    }
  }, [data]);

  return (
    <>
      {error && <p className='text-error'>{error}</p>}
      {errorPUT && <p className='text-error'>{errorPUT}</p>}

      <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <h1 className='text-center text-3xl py-10'>Ret Hero</h1>
        <div className='space-y-5 '>
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

        <form onSubmit={handleSubmit} noValidate className='form-control pb-20 space-y-5'>
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
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
              Titel:
            </label>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap gap-5 flex-auto'>
            <div className='relative indicator w-full'>
              <input
                type='text'
                name='buttonlink'
                id='buttonlink'
                value={buttonLink}
                onChange={(e) => setButtonLink(e.target.value)}
                required
                min='1'
                max='10'
                placeholder=' '
                className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
              />
              <label
                htmlFor='buttonlink'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl '>
                Button Link:
              </label>
            </div>

            <div className='flex flex-wrap sm:flex-nowrap gap-5'>
              <div className='relative indicator w-full'>
                <input
                  type='text'
                  name='buttontext'
                  id='buttontext'
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  required
                  placeholder=' '
                  className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
                />
                <label
                  htmlFor='buttontext'
                  className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
                  Button Tekst:
                </label>
              </div>
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
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
              Indhold:
            </label>
          </div>

          <div className='relative indicator w-full'>
            <input
              type='text'
              name='videolink'
              id='videolink'
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              required
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='videolink'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
              Video Link:
            </label>
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
              className='absolute -top-3 -left-1 bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
              image:
            </label>
          </div>

          <button type='submit' className='btn btn-primary text-white hover:animate-heartbeat'>
            Opdater Hero
          </button>
        </form>
        <Link href='/dashboard' className='btn btn-info hover:animate-heartbeat mb-10'>
          Tilbage til dashboard
        </Link>
      </div>
    </>
  );
}
