'use client';
import { useSession } from 'next-auth/react';

export default function DashboardLayout({ children, users, revenue, displayposts, login }) {
  const { data: session, status } = useSession();

  /* const isLoggedIn = !!session; */

  const isLoggedIn = true;
  return isLoggedIn ? (
    <section>
      <div className='flex flex-wrap'>
        <div className='flex flex-col'>
          {users}
          {revenue}
        </div>
        <div className='flex flex-1'>{displayposts}</div>
      </div>
      <div className=''>{children}</div>
    </section>
  ) : (
    <div>{login}</div>
  );
}
