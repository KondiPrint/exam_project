import Link from 'next/link';
import Image from 'next/image';

export default function TestHeader() {
  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='navbar bg-white mx-auto mt-2 rounded-md shadow-lg'>
          <div className='mx-2 flex-1 px-2'>
            <Link href={'/'} className=''>
              <Image
                src='/assets/image/logo-black.png'
                alt='Logo'
                className='text-black'
                width={100}
                height={100}
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
          <div className='hidden flex-none lg:block'>
            <ul className='menu menu-horizontal'>
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>

      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu bg-base-200 min-h-full w-52'>
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
