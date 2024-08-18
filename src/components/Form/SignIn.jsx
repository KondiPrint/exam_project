// app/login/page.js

'use client';

import { getProviders, signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

export default function SignInPage() {
  const [providers, setProviders] = useState(null);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  const providerIcons = {
    google: <FaGoogle className='size-8' />,
    github: <FaGithub className='size-8' />,
    facebook: <FaFacebook className='size-8' />,
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const result = await signIn('credentials', {
      username: credentials.username,
      password: credentials.password,
      redirect: false,
    });

    if (result.ok) {
      setMessage(`Welcome, ${credentials.username}`);
    } else {
      setMessage('Invalid username or password.');
    }
  };

  if (status === 'authenticated') {
    return (
      <div className='flex flex-col gap-5 text-center mt-8'>
        <div role='alert' className='alert alert-success'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='size-12 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <h1 className='text-3xl'>Welcome, {session.user.name}</h1>
        </div>

        <button onClick={() => router.push('/')} className='btn'>
          Go to Homepage
        </button>
      </div>
    );
  }

  return (
    <>
      {message && (
        <div className='p-6'>
          <div role='alert' className='alert alert-error'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-12 shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span className=' text-center'>{message}</span>
          </div>
        </div>
      )}

      <div className='flex flex-col justify-center items-center animate-fade-in my-auto p-2'>
        <form onSubmit={handleSignIn} className='space-y-5 p-2 mb-10 sm:mb-0 border-2'>
          <h2>Sign In with Credentials</h2>

          <div className='relative indicator w-full'>
            <input
              type='text'
              name='username'
              id='username'
              required
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='name'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
              Username:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>

          <div className='relative indicator w-full'>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='password'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
              Password:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>
          <div className='flex justify-between'>
            <button type='submit' className='btn btn-success'>
              Login
            </button>
            <button type='button' onClick={() => router.push('/signup')} className='btn-link'>
              Create an account
            </button>
          </div>
          <div>
            <h2>Sign In with a Provider</h2>
            {providers &&
              Object.values(providers).map(
                (provider) =>
                  provider.id !== 'credentials' && (
                    <div key={provider.name}>
                      <button onClick={() => signIn(provider.id)} className='btn btn-ghost'>
                        {providerIcons[provider.id] || provider.name}
                      </button>
                    </div>
                  )
              )}
          </div>
        </form>
      </div>
    </>
  );
}
