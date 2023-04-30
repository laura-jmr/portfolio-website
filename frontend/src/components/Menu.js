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

  function handleClick() {
    console.log("jumping to cv")
    window.location.hash = '#cv';
    const element = document.getElementById('cv');
    if (element) {
      console.log("elem cv found")
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.log("elem cv not found")
    }
  }

  const [isHidden, setIsHidden] = useState(false);
  const [linkColor, setLinkColor] = useState('#000');

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > 10) {
        setIsHidden(true);
        setTimeout(() => setIsHidden(false), 2000);
      } else {
        setIsHidden(false);
      }
    });

    const handleColorChange = debounce(() => {
      const bodyColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
      if (bodyColor === 'rgb(156, 70, 193)') { // purple background color
        setLinkColor('#fff');
      } else { // white background color
        setLinkColor('#00000');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleColorChange);
    handleColorChange(); // set initial color on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleColorChange);
    };
  }, []);

  return (
    <div className={`menu-box${isHidden ? " hidden" : ""}`}>
      <ul style={{ listStyle: 'none' }}>
        <li id='menu-link-1' style={{ color: linkColor }}>Projects</li>
        <li id='menu-link-2' style={{ color: linkColor }} onClick={handleClick} >CV</li>
        <li id='menu-link-3' style={{ color: linkColor }}> Temp</li>
        <li id='menu-link-4' style={{ color: linkColor }}>Temp</li>
      </ul>
    </div>
  )
}
