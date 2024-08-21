'use client';

import useRequestData from '@/app/lib/useRequestData';
import AmountPerSite from '../Pagination/AmountPerSite';
import PrevNext from '../Pagination/Prev_Next';
import { useEffect, useState } from 'react';
import Search from '../Pagination/Search';
import Header from '../Layout/Header';
import Link from 'next/link';

export default function NyhedsDisplay() {
  const [amountPerSite, setAmountPerSite] = useState(2);
  const [currentSite, setCurrentSite] = useState(0);
  const [searchKey, setSearchKey] = useState('Bicycle');
  const [langKey, setLangKey] = useState('en,da');
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, error, makeRequest } = useRequestData();

  const sliceData = (dataToSlice) => {
    return dataToSlice.slice(
      currentSite * amountPerSite,
      currentSite * amountPerSite + amountPerSite
    );
  };

  useEffect(() => {
    makeRequest(
      `https://newsdata.io/api/1/news?apikey=pub_51426a129428b6f8fc4477f75b3626ec04cab&q=${searchKey}&language=${langKey}`
    );
  }, [langKey]);

  // * Håndter KeyDown (indtastning) i inputfeltet - hvis Enter = start søgning
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
      handleSearch();
    }
  };

  // * Søgning i API'en
  const handleSearch = (e) => {
    e.preventDefault();
    makeRequest(
      `https://newsdata.io/api/1/news?apikey=pub_51426a129428b6f8fc4477f75b3626ec04cab&q=${searchKey}&language=${langKey}`
    );
  };
  const truncate = (input) => (input?.length > 100 ? `${input.substring(0, 90)}...` : input);
  return (
    <>
      <section>
        <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 bg-grey-bg'>
          <Header />
          <div className='text-center py-10'>
            <h3 className='text-primary'>Nyheder</h3>
            <h1 className='text-4xl font-semibold my-5'>Nyheder</h1>
          </div>

          <div className='flex justify-center md:justify-between items-center flex-wrap gap-3 p-4'>
            <AmountPerSite
              setAmountPerSite={setAmountPerSite}
              setCurrentSite={setCurrentSite}
              options={[2, 5, 10]}
            />

            <Search setSearchTerm={setSearchTerm} />
          </div>
        </div>

        <article className='bg-blue-bg grid grid-cols-1 gap-5 px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36 pt-10'>
          {data &&
            sliceData(data.results).map((news, index) => (
              <div key={index} className='card card-compact lg:card-side bg-base-100 shadow-xl'>
                <figure>
                  <img src={news.image_url} alt='' className='max-h-64 object-contain' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{news.title}</h2>
                  <div className='mb-5 text-primary'>
                    {news.pubDate} | {news.creator}
                  </div>
                  <p>{truncate(news.description)}</p>
                  <div className='card-actions justify-end'>
                    <Link
                      href={news.link}
                      target='_blank'
                      rel='noreferrer'
                      className='btn rounded-md font-archivo font-medium btn-primary text-white px-6 hover:bg-white hover:text-primary hover:-translate-y-1'>
                      Læs mere
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          <PrevNext
            setCurrentSite={setCurrentSite}
            currentSite={currentSite}
            dataLength={sliceData.length}
            amountPerSite={amountPerSite}
          />
        </article>
      </section>
    </>
  );
}
