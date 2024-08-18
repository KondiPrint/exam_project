'use client';

import React, { useState } from 'react';
import useRequestData from '@/app/lib/useRequestData';
import { FaTrash } from 'react-icons/fa';

export default function JsonDeletePost({ postId }) {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async () => {
    // Confirm deletion
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) {
      return;
    }

    // Clear previous messages
    setMessage('');
    setErrorMessage('');

    try {
      await makeRequest(`https://jsonplaceholder.typicode.com/posts/${postId}`, 'DELETE');
      setMessage('Post deleted successfully.');
    } catch (err) {
      console.error('Error deleting post:', err);
      setErrorMessage('Failed to delete the post.');
    }
  };

  return (
    <>
      <button onClick={handleDelete} disabled={isLoading} className='btn btn-small btn-ghost'>
        {isLoading ? 'Deleting...' : <FaTrash className='text-red-800 size-8' />}
      </button>

      {message && (
        <div role='alert' className='alert alert-success mt-2'>
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

      {errorMessage && (
        <div role='alert' className='alert alert-error mt-2'>
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
    </>
  );
}
