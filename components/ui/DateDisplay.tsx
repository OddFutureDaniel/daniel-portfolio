'use client';

import { useState, useEffect } from 'react';

export function DateDisplay() {
  const [showTime, setShowTime] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format date as "03 FEB 26"
  const day = now.getDate().toString().padStart(2, '0');
  const month = now.toLocaleString('en-GB', { month: 'short' }).toUpperCase();
  const year = now.getFullYear().toString().slice(-2);
  const dateStr = `${day} ${month} ${year}`;

  // Format time as "14:30:45"
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeStr = `${hours}:${minutes}:${seconds}`;

  return (
    <div
      onMouseEnter={() => setShowTime(true)}
      onMouseLeave={() => setShowTime(false)}
      className="cursor-default"
    >
      {showTime ? timeStr : dateStr}
    </div>
  );
}