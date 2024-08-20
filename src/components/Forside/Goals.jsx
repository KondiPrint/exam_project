'use client';
import { FaCrown, FaBiking, FaMap, FaHandshake, FaPlay } from 'react-icons/fa';
import { Suspense } from 'react';
import Image from 'next/image';

export default function Goals({ data, dataGoals }) {
  // Reverse the goals array to display them in reverse order
  const sortedGoals = [...dataGoals].sort((a, b) => a.order - b.order); // Use spread operator to avoid mutating the original array

  // Define the icons array
  const goalIcons = [FaHandshake, FaCrown, FaMap, FaBiking];

  return (
    <>
      <section className=''>
        <div className='bg-grey-bg space-y-10 px-4 pb-40 py-20 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 md:grid md:grid-cols-2 md:items-center'>
          <div>
            <h3 className='text-primary'>{data.suptitle}</h3>
            <h2 className='text-3xl font-bold'>{data.title}</h2>
          </div>
          <p className='font-archivo text-secondary font-semibold text-sm'>{data.content}</p>
        </div>

        <div className='sm:px-10 lg:px-20 xl:px-32 2xl:px-36 md:h-52 md:-mt-20 '>
          <div className='md:grid md:grid-cols-8 md:items-center '>
            <div className='md:row-span-full md:col-start-1 md:col-span-7 md:self-center md:h-52 2xl:h-72'>
              <div className='bg-blue-bg mx-4 -mt-20 p-4 text-center space-y-10 rounded-2xl md:row-span-full md:p-0 md:m-0 md:size-full md:space-y-0 md:grid md:place-content-center md:grid-cols-10 2xl:h-72'>
                {sortedGoals &&
                  sortedGoals.map((goals, id) => {
                    const Icons = goalIcons[id % goalIcons.length]; // Get the corresponding icon based on index

                    return (
                      <div
                        key={id}
                        className='md:flex md:place-content-center md:col-span-2 md:row-span-full'>
                        <div className='space-y-2'>
                          <div className='bg-primary rounded-full mx-auto size-10 flex place-items-center justify-center'>
                            <Icons className='text-white' /> {/* Render the icon */}
                          </div>
                          <p className='text-white text-4xl font-archivo'>{goals.goalcount}</p>
                          <span className='text-primary text-xs'>{goals.goal}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className='px-5 md:row-span-full md:col-end-9 md:col-start-4 md:flex md:p-0 md:justify-end'>
              <div className='relative md:size-44 2xl:h-64 2xl:w-96'>
                <Image
                  src={`http://localhost:5888/images/hero/${data.image}`}
                  alt='Test'
                  width={400}
                  height={400}
                  className='my-10 rounded-lg shadow-md object-cover brightness-105 md:aspect-square 2xl:aspect-video md:m-0 size-full'
                />

                {/* https://refine.dev/blog/tailwind-animations/#animate-ping */}
                <div className='flex justify-center absolute right-7 bottom-5 md:right-2 md:bottom-2'>
                  <div className='relative flex'>
                    <span className='btn btn-circle absolute inline-flex text-primary animate-ping opacity-60 md:btn-sm'></span>
                    <button
                      className='btn btn-circle relative inline-flex text-primary hover:text-white hover:bg-primary border-none md:btn-sm'
                      onClick={() => document.getElementById('my_modal_1').showModal()}>
                      <FaPlay className='size-3 md:size-2' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <dialog id='my_modal_1' className='modal p-2'>
          <div className='modal-box max-w-none sm:size-full p-0'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn btn-sm rounded-none border-none bg-black text-white absolute right-0 top-0'>
                X
              </button>
            </form>
            <Suspense
              fallback={
                <div className='skeleton size-32'>
                  <p>Loading video...</p>
                </div>
              }>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/H55W1NhAbQo?si=IbVSJVMl1tZh5L1d'
                title='YouTube video player'
                allow='web-share; fullscreen'
                referrerPolicy='strict-origin-when-cross-origin'
                aria-hidden='false'
                tabIndex='0'
                allowFullScreen></iframe>
            </Suspense>
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button>close</button>
          </form>
        </dialog>
      </section>
    </>
  );
}
