import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

export default function PrevNext({ setCurrentSite, currentSite, dataLength, amountPerSite }) {
  const maxAmountOfSites = Math.ceil(dataLength / amountPerSite);
  const maxVisiblePages = 5;
  const startPage = Math.max(0, currentSite - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(maxAmountOfSites - 1, startPage + maxVisiblePages - 1);
  const adjustedStartPage = Math.max(0, endPage - maxVisiblePages + 1);

  return (
    <>
      <aside className='flex flex-col my-10 w-fit'>
        <nav className='isolate inline-flex -space-x-px shadow-sm' aria-label='Pagination'>
          <div className='join'>
            <button
              className='join-item text-current btn bg-white'
              onClick={() => setCurrentSite(currentSite - 1)}
              disabled={currentSite <= 0}>
              <BsArrowUpShort className='-rotate-90 size-5' />
            </button>
            {Array.from({ length: Math.min(maxVisiblePages, maxAmountOfSites) }).map((_, index) => {
              const pageIndex = adjustedStartPage + index;
              if (pageIndex >= 0 && pageIndex < maxAmountOfSites) {
                return (
                  <button
                    key={pageIndex}
                    className={`relative join-item text-current btn border-y-0 ${
                      currentSite === pageIndex ? 'bg-primary' : 'bg-base-100'
                    }`}
                    onClick={() => setCurrentSite(pageIndex)}>
                    {pageIndex + 1}
                  </button>
                );
              }
              return null;
            })}
            <button
              className='join-item text-current btn bg-white'
              onClick={() => setCurrentSite(currentSite + 1)}
              disabled={currentSite + 1 >= maxAmountOfSites}>
              <BsArrowUpShort className='rotate-90 size-5' />
            </button>
          </div>
        </nav>
        <div className='text-center mt-2 w-fit mx-auto'>
          <p className=''>
            <span className=''>
              Viser {Math.min((currentSite + 1) * amountPerSite, dataLength || 0)}
            </span>{' '}
            af <span className=''>{dataLength || 0}</span>
          </p>
        </div>
      </aside>
    </>
  );
}
