'use client';
import Header from '@/components/Layout/Header';
import { useSession } from 'next-auth/react';

export default function DashboardLayout({
  children,
  displaybeskeder,
  displayforsidehero,
  displaygoals,
  displayevents,
  login,
}) {
  const { data: session, status } = useSession();

  const isLoggedIn = true; /* !!session */
  return isLoggedIn ? (
    <>
      <section className='bg-grey-bg space-y-10'>
        <div className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
          <Header />
        </div>
        <div className='flex flex-wrap gap-5 p-4'>
          {displayforsidehero}
          {displaybeskeder}
          {displaygoals}
          {displayevents}
        </div>
        <div>{children}</div>
      </section>
    </>
  ) : (
    <>
      <section className='px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <Header />
        {login}
      </section>
    </>
  );
}
