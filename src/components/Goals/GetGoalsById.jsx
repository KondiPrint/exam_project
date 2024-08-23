'use client';

import React, { useState, useEffect } from 'react';
import useRequestData from '@/app/lib/useRequestData';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function UpdateGoal() {
  const { id } = useParams();
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: dataPUT,
    isLoading: isLoadingPUT,
    error: errorPUT,
    makeRequest: makeRequestPUT,
  } = useRequestData();

  const [goal, setGoal] = useState('');
  const [goalCount, setGoalCount] = useState(null);
  const [icon, setIcon] = useState('');
  const [order, setOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();

    setMessage('');
    setErrorMessage('');

    if (!goal.trim() || goalCount === null || !icon.trim() || order === null) {
      setErrorMessage('Der må ikke være tomme felter!');
      return;
    }

    try {
      await makeRequestPUT(`http://localhost:5888/goals/admin/${id}`, 'PUT', {
        goal,
        goalCount: Number(goalCount),
        icon,
        order: Number(order),
      });
      setMessage('Goal er rettet uden problem');
    } catch (error) {
      console.error('Fejl i rettelse af Goal', error);
      setErrorMessage('Kunne ikke rette Goal.');
    }
  };

  useEffect(() => {
    if (id) {
      makeRequest(`http://localhost:5888/goals/${id}`, 'GET');
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      setGoal(data.goal || '');
      setGoalCount(data.goalCount !== undefined ? data.goalCount : '');
      setIcon(data.icon || '');
      setOrder(data.order !== undefined ? data.order : '');
    }
  }, [data]);

  return (
    <>
      {error && <p className='text-error'>{error}</p>}
      {errorPUT && <p className='text-error'>{errorPUT}</p>}

      <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <h1 className='text-center text-3xl py-10'>Ret Goal</h1>
        <div className='space-y-5'>
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

        <form onSubmit={handleUpdate} noValidate className='form-control pb-20 space-y-5'>
          <div className='flex flex-wrap sm:flex-nowrap gap-5 flex-auto'>
            <div className='relative indicator w-full'>
              <input
                type='text'
                name='goal'
                id='goal'
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
                placeholder=' '
                className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
              />
              <label
                htmlFor='goal'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
                Goal:
              </label>
            </div>
            <div className='relative indicator w-full'>
              <input
                type='number'
                name='order'
                id='order'
                value={order || ''}
                onChange={(e) => setOrder(e.target.value)}
                required
                placeholder=' '
                className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
              />
              <label
                htmlFor='order'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
                Order:
              </label>
            </div>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap gap-5 flex-auto'>
            <div className='flex flex-wrap sm:flex-nowrap gap-5'>
              <div className='relative indicator w-full'>
                <input
                  type='text'
                  name='icon'
                  id='icon'
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  required
                  placeholder=' '
                  className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
                />
                <label
                  htmlFor='icon'
                  className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
                  Icon:
                </label>
              </div>
            </div>
            <div className='relative indicator w-full'>
              <input
                type='number'
                name='goalcount'
                id='goalcount'
                value={goalCount || ''}
                onChange={(e) => setGoalCount(e.target.value)}
                required
                placeholder=' '
                className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
              />
              <label
                htmlFor='goalcount'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-grey-bg peer-valid:bg-grey-bg px-1 rounded-br-xl'>
                Goal Count:
              </label>
            </div>
          </div>

          <button type='submit' className='btn btn-primary text-white hover:animate-heartbeat'>
            Opdater Goal
          </button>
        </form>
        <Link href='/dashboard' className='btn btn-info hover:animate-heartbeat mb-10'>
          Tilbage til dashboard
        </Link>
      </div>
    </>
  );
}
