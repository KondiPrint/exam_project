import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { CgProfile } from 'react-icons/cg';

export default function DrawerMenu() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinksDrop = [
    { name: 'Wonders', href: '/wonders' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Posts', href: '/jsonplaceholder' },
    { name: 'Page_1', href: '/page_1' },
    { name: 'Page_2', href: '/page_2' },
    { name: 'Page_3', href: '/page_3' },
    { name: 'Page_4', href: '/page_4' },
    { name: 'Page_5', href: '/page_5' },
  ];

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked1(checked);
    setIsChecked2(checked);
  };

  const handleLinkClick = () => {
    setIsChecked1(false);
    setIsChecked2(false);
  };

  {
    /* close icon */
  }
  const dropdownShown = (
    <svg
      className='swap-on fill-current size-10'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 512 512'>
      <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
    </svg>
  );

  {
    /* hamburger icon */
  }
  const dropdownHidden = (
    <svg
      className='swap-off fill-current size-10'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 512 512'>
      <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
    </svg>
  );

  return (
    <>
      <div className='drawer'>
        <input
          id='my-drawer'
          type='checkbox'
          checked={isChecked1}
          className='drawer-toggle'
          onChange={handleCheckboxChange}
        />
        <div className='drawer-content'>
          {/* Page content here */}
          <label htmlFor='my-drawer' className='btn btn-circle swap swap-rotate drawer-button'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              checked={isChecked2}
              onChange={(e) => setIsChecked2(e.target.checked)}
            />
            {/* hamburger icon */}
            {dropdownHidden}

            {/* close icon */}
            {dropdownShown}
          </label>
        </div>

        <div className='drawer-side z-10'>
          <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'></label>

          <ul className='menu bg-base-200 text-base-content min-h-full w-56 p-4'>
            {/* Sidebar content here */}
            {navLinksDrop.map((links) => {
              const isActive = pathname.startsWith(links.href);
              return (
                <li key={links.name} className=''>
                  <Link
                    href={links.href}
                    onClick={handleLinkClick}
                    className={`block w-full ${
                      isActive ? 'text-primary font-bold' : 'font-normal'
                    }`}>
                    {links.name}
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
                          if (confirm('Are you sure you want to sign out?')) {
                            signOut({ callbackUrl: '/' });
                          }
                        }}
                        className='btn btn-sm btn-error mt-5'>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                  <div className='dropdown dropdown-end'>
                    <div
                      tabIndex={0}
                      role='button'
                      className='btn btn-ghost btn-circle avatar'></div>
                    <div className='w-10 rounded-full'></div>
                  </div>
                </>
              ) : (
                <Link
                  href={'/signin'}
                  onClick={handleLinkClick}
                  className='btn btn-lg flex justify-center'>
                  Sign in
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
