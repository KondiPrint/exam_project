'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function GithubProfile() {
  const { data: session, status } = useSession();

  return (
    <div className='p-2 '>
      <div className='flex flex-col items-center my-10'>
        <h1 className='text-xl font-bold text-center'>Welcome to your profile</h1>
        {session?.user?.name ? <h2 className='text-2xl'>{session.user.name}!</h2> : null}
      </div>

      <div className=''>
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={200}
            height={200}
            alt={`Profile Pic for ${session.user.name}`}
            priority={true}
            className='cover w-5/6 mx-auto'
          />
        ) : null}
      </div>
    </div>
  );
}
