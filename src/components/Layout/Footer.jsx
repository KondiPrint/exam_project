'use client';
import useRequestData from '@/app/lib/useRequestData';
import Image from 'next/image';
import { useEffect } from 'react';
import { FaHouseChimney } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

export default function Footer() {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    // Make the request when the component mounts
    makeRequest('http://localhost:5888/contactinformation');
  }, []);

  console.log(data);

  return (
    <footer className=' bg-gradient-to-r from-[#061019] to-[#0c2539] text-white'>
      <div className='footer bg-topo-pattern p-4'>
        {data && (
          <aside>
            <Image src={'/assets/image/logo.png'} width={200} height={200} alt='Test' />
            <p>{data.companypayoff}</p>
            <div className='flex gap-1 items-center'>
              <div className='bg-slate-800 p-2 rounded-full'>
                <FaHouseChimney className='text-primary' />
              </div>
              <p>Klubhuset:</p>
              <address>
                {data.address}, {data.zipcity}
              </address>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='bg-slate-800 p-2 rounded-full'>
                <IoIosMail className='text-primary' />
              </div>
              <p>{data.email}</p>
            </div>
          </aside>
        )}
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <div className='divider'></div>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <div className='divider'></div>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
}
