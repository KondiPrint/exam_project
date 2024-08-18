'use client';

import { useEffect, useState } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
  };

  return (
    <button
      className={`fixed hover:brightness-200 bottom-2 right-1 rounded-full p-2 outline-none transition-all duration-500 z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}>
      <FaChevronCircleUp className='size-6 fill-primary' />
    </button>
  );
}
