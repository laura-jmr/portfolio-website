import React, { useEffect, useState } from 'react'

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default function Menu() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > 10) {
        setIsHidden(true);
        setTimeout(() => setIsHidden(false), 6000);
      } else {
        setIsHidden(false);
      }
      setLastScrollTop(currentScrollTop);
    });

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`menu-box${isHidden ? " hidden" : ""}`}>
      <ul style={{ listStyle: 'none' }}>
        <li id='menu-link-1'>Projects</li>
        <li id='menu-link-2'>CV</li>
        <li id='menu-link-3'> Temp</li>
        <li id='menu-link-4'>Temp</li>
      </ul>
    </div>
  )
}
