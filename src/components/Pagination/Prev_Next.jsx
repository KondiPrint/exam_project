import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PrevNext({ setCurrentSite, currentSite, dataLength, amountPerSite }) {
  const maxAmountOfSites = Math.ceil(dataLength / amountPerSite);
  const maxVisiblePages = 5; // Number of page buttons to display

  // Determine the range of page numbers to display
  const startPage = Math.max(0, currentSite - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(maxAmountOfSites - 1, startPage + maxVisiblePages - 1);

  // Adjust the start page if there aren't enough pages to the right
  const adjustedStartPage = Math.max(0, endPage - maxVisiblePages + 1);

  return (
    <>
      <aside className='flex flex-col my-10 w-full items-center'>
        <div className='flex gap-2'>
          <button
            className='btn btn-primary text-current sm:hidden'
            onClick={() => setCurrentSite(currentSite - 1)}
            disabled={currentSite <= 0}>
            <FaChevronLeft />
          </button>
          <div className='hidden sm:flex'>
            <nav className='isolate inline-flex -space-x-px shadow-sm' aria-label='Pagination'>
              <div className='join'>
                <button
                  className='join-item text-current btn btn-primary'
                  onClick={() => setCurrentSite(currentSite - 1)}
                  disabled={currentSite <= 0}>
                  <FaChevronLeft />
                </button>
                {Array.from({ length: Math.min(maxVisiblePages, maxAmountOfSites) }).map(
                  (_, index) => {
                    const pageIndex = adjustedStartPage + index;
                    if (pageIndex >= 0 && pageIndex < maxAmountOfSites) {
                      return (
                        <button
                          key={pageIndex}
                          className={`relative join-item text-current btn ${
                            currentSite === pageIndex ? 'bg-secondary' : 'bg-base-100'
                          }`}
                          onClick={() => setCurrentSite(pageIndex)}>
                          {pageIndex + 1}
                        </button>
                      );
                    }
                    return null;
                  }
                )}
                <button
                  className='join-item text-current btn btn-primary'
                  onClick={() => setCurrentSite(currentSite + 1)}
                  disabled={currentSite + 1 >= maxAmountOfSites}>
                  <FaChevronRight />
                </button>
              </div>
            </nav>
          </div>
          <button
            className='text-current btn btn-primary sm:hidden'
            onClick={() => setCurrentSite(currentSite + 1)}
            disabled={currentSite + 1 >= maxAmountOfSites}>
            <FaChevronRight />
          </button>
        </div>

        <div className='text-center mt-5'>
          <p className=''>
            Showing{' '}
            <span className='font-semibold'>
              {Math.min((currentSite + 1) * amountPerSite, dataLength || 0)}
            </span>{' '}
            of <span className='font-semibold'>{dataLength || 0}</span> results
          </p>
        </div>
      </aside>
    </>
  );
}
