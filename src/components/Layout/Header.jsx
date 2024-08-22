'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from './ScrollToTop';
import useRequestData from '@/app/lib/useRequestData';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { MdOutlineEmail } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
  FaRegBuilding,
  FaRegCalendarAlt,
} from 'react-icons/fa';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  // Ensure the hook returns an object with these properties
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    data: dataInfo,
    isLoading: isLoadingInfo,
    error: errorInfo,
    makeRequest: makeRequestInfo,
  } = useRequestData();

  useEffect(() => {
    makeRequest('http://localhost:5888/eventcategories');
  }, []);

  useEffect(() => {
    makeRequestInfo('http://localhost:5888/contactinformation');
  }, []);

  /* https://stackoverflow.com/questions/65526496/how-to-listen-to-screen-position-with-next-js */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Forside', href: '/' },
    { name: 'Om os', href: '/omos' },
    { name: 'Events', isDropdown: true },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Nyheder', href: '/nyheder' },
  ];

  return (
    <header className='drawer z-10 items-center'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {dataInfo && (
          <div className='justify-between items-center p-2 hidden lg:flex'>
            <ul className='flex gap-10'>
              <li className='flex gap-2 items-center'>
                <FaRegBuilding />
                Klubhuset: {dataInfo.address}, {dataInfo.zipcity}
              </li>
              <li className='flex gap-2 items-center'>
                <FaRegCalendarAlt />
                {dataInfo.openinghours}
              </li>
              <li className='flex gap-2 items-center'>
                <MdOutlineEmail />
                {dataInfo.email}
              </li>
            </ul>
            <ul className='flex gap-2'>
              <li className='hover:text-primary'>
                <Link href={'https://www.instagram.dk'} target='_blank'>
                  <FaInstagram />
                </Link>
              </li>
              <li className='hover:text-primary'>
                <Link href={'https://www.pinterest.com/w'} target='_blank'>
                  <FaPinterest />
                </Link>
              </li>
              <li className='hover:text-primary' target='_blank'>
                <Link href={'https://x.com'}>
                  <FaTwitter />
                </Link>
              </li>
              <li className='hover:text-primary'>
                <Link href={'https://www.facebook.dk'} target='_blank'>
                  <FaFacebook />
                </Link>
              </li>
            </ul>
          </div>
        )}

        <nav
          className={`navbar bg-white mx-auto p-0 mt-2 rounded-md shadow-lg  ${
            isFixed
              ? 'fixed top-0 left-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-5rem)] lg:w-[calc(100%-10rem)] xl:w-[calc(100%-16rem)] 2xl:w-[calc(100%-18rem)] transform -translate-x-1/2 animate-fade-in'
              : ''
          }`}>
          <div className='mx-2 flex-1 px-4'>
            <Link href={'/'}>
              <Image
                src='/assets/image/logo-black.png'
                alt='Logo'
                width={100}
                height={100}
                className='size-full'
              />
            </Link>
          </div>
          <div className='flex-none lg:hidden navbar-end'>
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-6 w-6 stroke-current'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </label>
          </div>
          <div className='hidden flex-none lg:block h-full '>
            <ul className='menu menu-horizontal h-16 m-0 p-0'>
              {navLinks.map((link, index) => {
                const isActive =
                  link.href === '/' ? pathname === link.href : pathname.startsWith(link.href);

                if (link.isDropdown) {
                  return (
                    <li key={index} className='dropdown dropdown-hover'>
                      <div
                        tabIndex={0}
                        className={`rounded-none h-16 w-full items-center flex ${
                          isActive
                            ? 'text-primary font-bold'
                            : 'font-normal hover:border-b-4 hover:border-primary'
                        }`}>
                        {link.name}
                      </div>
                      <ul
                        tabIndex={0}
                        className='dropdown-content menu bg-white z-[1] w-52 shadow p-0 rounded-none'>
                        {isLoading && <li>Loading...</li>}
                        {error && <li>Error: {error}</li>}
                        {data &&
                          data.map((category, index) => {
                            const categoryHref = `/events/`;
                            return (
                              <li key={index} className='h-full'>
                                <Link
                                  href={categoryHref || '/events'}
                                  className={`rounded-none px-2 w-full ${
                                    pathname.startsWith(categoryHref)
                                      ? 'text-primary font-bold'
                                      : 'font-normal hover:border-b-4 hover:border-primary'
                                  }`}>
                                  {category.category}
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={index} className='h-full'>
                    <div
                      className={`rounded-none h-16 flex ${
                        isActive
                          ? 'text-primary font-bold border-b-4 border-primary'
                          : 'font-normal hover:border-b-4 hover:border-primary'
                      }`}>
                      <Link href={link.href} className='self-center'>
                        {link.name}
                      </Link>
                    </div>
                  </li>
                );
              })}
              <Link
                href={'/kontakt'}
                className='btn btn-primary h-full rounded-l-none rounded-r-md border-none text-white ml-5 hover:text-primary  hover:bg-red-100 hover:opacity-90'>
                Gratis prøveperiode
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <nav className='drawer-side'>
        <label htmlFor='my-drawer-3' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu bg-darkPurple text-white min-h-full min-w-52 sm:w-96 justify-center'>
          <Image
            src='/assets/image/logo.png'
            alt='Logo'
            className='text-black mb-10'
            width={150}
            height={200}
          />
          {navLinks.map((link, index) => {
            const isActive =
              link.href === '/' ? pathname === link.href : pathname.startsWith(link.href);

            if (link.isDropdown) {
              return (
                <li key={index}>
                  <details>
                    <summary className={`${isActive ? 'text-primary font-bold' : 'font-normal'}`}>
                      {link.name}
                    </summary>
                    <ul>
                      {isLoading && <li>Loading...</li>}
                      {error && <li>Error: {error}</li>}
                      {data &&
                        data.map((category, index) => {
                          const categoryHref = `/events/`;
                          return (
                            <li key={index}>
                              <Link
                                href={categoryHref}
                                className={
                                  pathname.startsWith(categoryHref)
                                    ? 'text-primary font-bold'
                                    : 'font-normal'
                                }
                                onClick={() => {
                                  document.getElementById('my-drawer-3').checked = false;
                                }}>
                                {category.category}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </details>
                </li>
              );
            }

            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? 'text-primary font-bold border-b-4 rounded-none border-primary'
                      : 'font-normal'
                  }
                  onClick={() => {
                    document.getElementById('my-drawer-3').checked = false;
                  }}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          <div className='divider divider-accent'></div>
          <div>
            {session ? (
              <>
                {session.user.image ? (
                  <Image
                    className='w-10 rounded-full mx-auto mb-4'
                    alt='Beautiful profile picture!'
                    width={700}
                    height={700}
                    src={session.user.image}
                  />
                ) : (
                  <CgProfile className='size-10 mx-auto mb-4' />
                )}
                <ul className='space-y-2'>
                  <li>
                    <Link href={'/profile'} className='justify-between'>
                      Profile
                      <span className='badge'>New</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/dashboard'} className='justify-between'>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        if (confirm('Er du sikker på du gerne vil logge ud?')) {
                          signOut({ callbackUrl: '/' });
                        }
                      }}
                      className='btn btn-sm btn-error mt-5'>
                      Sign Out
                    </button>
                  </li>
                </ul>
                <div className='dropdown dropdown-end'>
                  <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'></div>
                  <div className='w-10 rounded-full'></div>
                </div>
              </>
            ) : (
              <Link href={'/signin'} className='btn btn-lg flex justify-center'>
                Sign in
              </Link>
            )}
          </div>
        </ul>
      </nav>
      <ScrollToTop />
    </header>
  );
}
