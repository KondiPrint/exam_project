import React from 'react';
import GetEventsAdmin from '@/components/Events/GetEventsAdmin';
import fetchData from '@/app/lib/fetchData';

export default async function EditEvent() {
  const { data, error } = await fetchData('http://localhost:5888/events');
  return (
    <>
      <section className='bg-blue-bg py-10'>
        <h1 className='text-3xl font-bold py-10 text-center text-white'>Her kan du rette events</h1>
        <GetEventsAdmin data={data} />
      </section>
    </>
  );
}
