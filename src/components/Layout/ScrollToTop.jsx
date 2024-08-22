'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
  };

  return (
    <button
      className={`fixed hover:bg-slate-700 border-none hover:text-white bottom-5 right-5 btn outline-none transition-all duration-500 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}>
      <FaArrowUp className='size-3' />
    </button>
  );
}
