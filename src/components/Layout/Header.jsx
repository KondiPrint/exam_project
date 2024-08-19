'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import ScrollToTop from './ScrollToTop';
import ThemeToggler from './ThemeToggle';
import { usePathname } from 'next/navigation';
import DrawerMenu from './DrawerMenu';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import useRequestData from '@/app/lib/useRequestData';

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    // Make the request when the component mounts
    makeRequest('http://localhost:5888/eventcategories');
  }, []);

  const navLinks = [
    { name: 'Forside', href: '/' },
    { name: 'Om os', href: '/omos' },
    { name: 'Events', href: '/events', isDropdown: true },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Nyheder', href: '/nyheder' },
  ];

  return (
    <header
      id='top'
      className='fixed bg-white w-11/12 mx-auto p-2 z-10 transform -translate-x-1/2 left-1/2 rounded-md top-5 shadow-md'>
      <nav className='navbar'>
        <div className='flex-1 gap-4'>
          <Link href={'/'} className=''>
            <Image
              src='/assets/image/logo-black.png'
              alt='Logo'
              className='text-black'
              width={100}
              height={100}
            />
          </Link>

          {/*  <ThemeToggler /> */}
        </div>

        <div className='flex-none hidden sm:flex'>
          <ul className='menu menu-horizontal px-1'>
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);

              if (link.isDropdown) {
                // Render the dropdown for 'Events'
                return (
                  <li key={link.name} className='dropdown dropdown-hover'>
                    <div
                      tabIndex={0}
                      className={`${isActive ? 'text-primary font-bold' : 'font-normal'}`}>
                      {link.name}
                    </div>
                    <ul
                      tabIndex={0}
                      className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
                      {isLoading && <li>Loading...</li>}
                      {error && <li>Error: {error}</li>}
                      {data &&
                        data.map((category) => {
                          const categoryHref = `/events/${category.slug}`; // Adjust as needed
                          return (
                            <li key={category.id}>
                              <Link
                                href={categoryHref}
                                className={
                                  pathname.startsWith(categoryHref)
                                    ? 'text-primary font-bold'
                                    : 'font-normal'
                                }>
                                {category.category} {/* Adjust as needed */}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={
                      isActive
                        ? 'text-primary font-bold border-b-4 rounded-none border-primary'
                        : 'font-normal'
                    }>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='sm:hidden'>
          <DrawerMenu />
        </div>
      </nav>

      <ScrollToTop />
    </header>
  );
}
