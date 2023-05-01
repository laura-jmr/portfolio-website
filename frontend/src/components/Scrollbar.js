import React, { useEffect, useState } from 'react';

export default function Scrollbar() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPos(position);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollPercentage = Math.floor((scrollPos / (document.body.scrollHeight - window.innerHeight)) * 1);
  
  return (
    <div className="scrollbar-container">
      <div className="scrollbar-dots">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`scrollbar-dot ${scrollPercentage >= i * 2 && scrollPercentage < (i + 1) * 2 ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
