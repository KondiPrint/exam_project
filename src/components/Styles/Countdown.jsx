'use client';

import { useEffect, useState, useRef } from 'react';

export default function CountdownTimer({ data }) {
  const countDownDate = new Date(data.eventdate).getTime();
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

    updateCountdown();
    intervalRef.current = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalRef.current);
  }, [countDownDate]);

  return (
    <>
      <section className='flex flex-wrap justify-center gap-5 text-center uppercase snap-always snap-start'>
        <div className='flex gap-5'>
          <div>
            <span className='countdown font-mono text-4xl'>
              <span style={{ '--value': days }}></span>
            </span>
            dage
          </div>
          <div>
            <span className='countdown font-mono text-4xl'>
              <span style={{ '--value': hours }}></span>
            </span>
            timer
          </div>
          <div>
            <span className='countdown font-mono text-4xl'>
              <span style={{ '--value': minutes }}></span>
            </span>
            min
          </div>
          <div>
            <span className='countdown font-mono text-4xl'>
              <span style={{ '--value': seconds }}></span>
            </span>
            sek
          </div>
        </div>
      </section>
    </>
  );
}
