'use client';

import { getProviders, signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

export default function SignUpPage() {
  const [providers, setProviders] = useState(null);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const providerIcons = {
    google: <FaGoogle />,
    github: <FaGithub className='size-8' />,
    facebook: <FaFacebook />,
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Din konto er blevet oprettet!');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Der opstod en fejl under oprettelsen:', error);
      setMessage('Der opstod en fejl. Prøv venligst igen');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center animate-fade-in'>
      {message && <p>{message}</p>}
      <form onSubmit={handleSignUp} className='space-y-5 p-2 mb-10 sm:mb-0'>
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
            htmlFor='username'
            className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
            Brugernavn:
          </label>
          <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
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
          <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
        </div>
        <div className='flex justify-between gap-5'>
          <button type='submit' className='btn btn-success'>
            Opret konto
          </button>
          <button type='button' onClick={() => router.push('/signin')} className='btn-link'>
            Har du allerede en konto?
          </button>
        </div>
        <div>
          <h2>Log på med en udgiver</h2>
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
  );
}
