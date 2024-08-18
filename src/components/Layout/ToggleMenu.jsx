import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

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

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    setDropDownVisible(!dropDownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
      <div className='dropdown dropdown-end' ref={dropdownRef}>
        <div
          role='button'
          tabIndex={0}
          onClick={toggleDropdown}
          className={`swap swap-rotate btn-circle ${isOpen ? 'swap-active' : ''}`}>
          {dropdownHidden}

          {dropdownShown}
        </div>
        {isOpen && (
          <ul tabIndex={0} className='dropdown-content menu bg-base-100 z-50 p-4 drop-shadow-2xl'>
            {navLinksDrop.map((links) => {
              const isActive = pathname.startsWith(links.href);
              return (
                <li key={links.name} className=''>
                  <Link
                    href={links.href}
                    onClick={toggleDropdown}
                    className={`block w-full ${
                      isActive ? 'text-primary font-bold' : 'font-normal'
                    }`}>
                    {links.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
