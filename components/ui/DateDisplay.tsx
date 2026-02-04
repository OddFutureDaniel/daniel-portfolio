'use client'

import { useState, useEffect } from 'react';

export function DateDisplay() {
  const [showTime, setShowTime] = useState(false);
  const [, setTick] = useState(0);
  
  useEffect(() => {
    if (showTime) {
      const interval = setInterval(() => {
        setTick(prev => prev + 1); // Force re-render every second
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [showTime]);
  
  const now = new Date(); // Always get current time
  
  // Format date as "03 FEB 26"
  const day = now.getDate().toString().padStart(2, '0');
  const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
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