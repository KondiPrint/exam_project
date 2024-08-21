'use client';

import Image from 'next/image';
import Header from '../Layout/Header';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { TbClockHour10 } from 'react-icons/tb';
import { useState } from 'react';
import useRequestData from '@/app/lib/useRequestData';

export default function KontaktHero({ data, dataInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const { makeRequest, isLoading } = useRequestData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('');
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Navn, Email, og Besked skal udfyldes');
      return;
    }

    try {
      const apiurl = 'http://localhost:5888/inqueries';
      const method = 'POST';

      await makeRequest(apiurl, method, formData);

      setMessage('Beskeden er sendt afsted!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('En fejl opstod:', error);
      setErrorMessage('Beskeden kunne ikke sendes!');
      setMessage('');
    }
  };
  return (
    <>
      <section className=' '>
        <div className='bg-blue-bg h-[32rem] px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
          <div className=''>
            <Header />
            <div className='hero text-white pt-20'>
              <div className='hero-content text-center'>
                <div className='max-w-md'>
                  <p className='py-6'>{data.suptitle}</p>
                  <h1 className='text-4xl md:text-5xl font-bold'>{data.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 -mt-36 mb-10 md:-mt-24'>
          <Image
            src={`http://localhost:5888/images/hero/${data.image}`}
            height={800}
            width={800}
            alt={data.image}
            className='size-full aspect-square rounded-lg object-cover sm:aspect-[7/3] mx-auto'
          />
        </div>

        <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 py-20 md:grid md:grid-cols-3 md:gap-10'>
          <aside className='col-start-1 col-end-2'>
            <div className='bg-grey-bg rounded-lg py-10 px-5'>
              {dataInfo && (
                <div className='justify-between items-center p-2'>
                  <ul className='space-y-5'>
                    <li className='flex gap-2 items-center'>
                      <div className='rounded-full bg-red-100 bg-opacity-50 p-1'>
                        <HiOutlineBuildingOffice2 className='text-primary' />
                      </div>
                      Klubhuset i Grenå
                    </li>
                    <li className='flex gap-2 items-center'>
                      <div className='rounded-full bg-red-100 bg-opacity-50 p-1'>
                        <GrLocation className='text-primary' />
                      </div>
                      {dataInfo.address}, {dataInfo.zipcity}
                    </li>
                    <li className='flex gap-2 items-center'>
                      <div className='rounded-full bg-red-100 bg-opacity-50 p-1'>
                        <TbClockHour10 className='rotate-[140deg] text-primary' />
                      </div>
                      {dataInfo.openinghours}
                    </li>
                    <li className='flex gap-2 items-center'>
                      <div className='rounded-full bg-red-100 bg-opacity-50 p-1'>
                        <MdOutlineEmail className='text-primary' />
                      </div>
                      {dataInfo.email}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </aside>

          <aside className='col-start-2 col-end-4'>
            {errorMessage && (
              <div role='alert' className='alert bg-red-400 mb-10'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current shrink-0 size-10 text-white'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
                <span className='text-white'>{errorMessage}</span>
              </div>
            )}
            {message && (
              <div role='alert' className='alert alert-success mb-10'>
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
            <form onSubmit={handleSubmit} noValidate className='space-y-2'>
              <label className='form-control w-full'>
                <div className='label'>
                  <span className='label-text text-secondary'>Navn</span>
                </div>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Dit navn...'
                  className='input input-bordered w-full'
                  required
                />
              </label>
              <label className='form-control w-full'>
                <div className='label'>
                  <span className='label-text text-secondary'>Email</span>
                </div>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Din email...'
                  className='input input-bordered w-full'
                  required
                />
              </label>
              <label className='form-control w-full'>
                <div className='label'>
                  <span className='label-text text-secondary'>Telefon</span>
                </div>
                <input
                  type='text'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Dit telefonnummer...'
                  className='input input-bordered w-full'
                  required
                />
              </label>
              <label className='form-control'>
                <div className='label'>
                  <span className='label-text'>Besked</span>
                </div>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='textarea textarea-bordered h-24'
                  placeholder='Din besked...'
                  required></textarea>
              </label>
              <div>
                <button type='submit' className='btn bg-black text-white' disabled={isLoading}>
                  {isLoading ? 'Sender...' : 'Send besked'}
                </button>
              </div>
            </form>
          </aside>
        </div>
      </section>
    </>
  );
}
