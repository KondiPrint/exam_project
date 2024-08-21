'use client';

import { useEffect, useState, useRef } from 'react';

export default function CountdownTimer() {
  const countDownDate = new Date('Sep 30, 2024 23:59:59').getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(intervalRef.current);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }

    updateCountdown(); // Initialize countdown immediately
    intervalRef.current = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [countDownDate]);

  return (
    <>
      <div className='divider divider-secondary my-10 text-xl'>
        <h2 className='text-3xl font-bold text-center'>Graduate in:</h2>
      </div>
      <section className='flex flex-wrap justify-center gap-5 text-center uppercase snap-always snap-start'>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown font-mono text-5xl'>
            <span style={{ '--value': days }}></span>
          </span>
          days
        </div>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown font-mono text-5xl'>
            <span style={{ '--value': hours }}></span>
          </span>
          hours
        </div>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown font-mono text-5xl'>
            <span style={{ '--value': minutes }}></span>
          </span>
          min
        </div>
        <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
          <span className='countdown font-mono text-5xl'>
            <span style={{ '--value': seconds }}></span>
          </span>
          sec
        </div>
      </section>
    </>
  );
}
