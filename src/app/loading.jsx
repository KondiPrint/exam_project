'use client';
import React, { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    document.querySelector('dialog').showModal();
  }, []);
  return <dialog className='loading loading-spinner w-36 min-h-dvh'></dialog>;
}
