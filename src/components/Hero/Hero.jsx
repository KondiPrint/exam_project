'use client';
import { Suspense } from 'react';

export default function Hero() {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
        }}>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className='flex gap-4 justify-center'>
              <button className='btn btn-primary'>Get Started</button>
              <button
                className='btn'
                onClick={() => document.getElementById('my_modal_1').showModal()}>
                Watch Video
              </button>

              <dialog id='my_modal_1' className='modal p-2'>
                <div className='modal-box max-w-none sm:size-full p-0'>
                  <form method='dialog'>
                    {/* if there is a button in form, it will close the modal */}
                    <button className='btn btn-sm btn-circle btn-ghost absolute right-0 top-0'>
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
                      title='Sandy beach'
                      width='100%'
                      height='100%'
                      loading='lazy'
                      src='https://www.youtube.com/embed/6rd6NCoDKDc?si=3MUV4W1setk8jhye'
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
