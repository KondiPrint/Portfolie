'use client';

import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const countdownDate = new Date('2024-12-05T00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeSpan = countdownDate - now;
      const days = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeSpan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeSpan % (1000 * 60 * 60)) / (1000 * 60));

      setRemainingTime({
        days,
        hours,
        minutes,
      });

      if (timeSpan < 0) {
        clearInterval(interval);
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-5xl text-gray-200 flex flex-wrap justify-center font-bold'>
      <h3 className='p-4 sm:border-4 sm:rounded-l-3xl'>{remainingTime.days}D</h3>
      <h3 className='p-4 sm:border-y-4'>{remainingTime.hours}H</h3>
      <h3 className='p-4 sm:border-4 sm:rounded-r-3xl'>{remainingTime.minutes}M</h3>
    </div>
  );
};

export default CountdownTimer;
