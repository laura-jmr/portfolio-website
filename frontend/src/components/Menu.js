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
  const [linkColorTop, setLinkColorTop] = useState('#000');
  const [linkColorBottom, setLinkColorBottom] = useState('#000');

  const handleColorChange = () => {
    const scrollTop = window.scrollY;
    console.log(scrollTop)
    const isBackgroundVisible = scrollTop >= window.innerHeight;
  
    if (isBackgroundVisible) {
      setLinkColorTop('#fff');
      setLinkColorBottom('#fff');
    } else { 
      setLinkColorTop('#000');
      setLinkColorBottom('#000');
    }
  };

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    if (currentScrollTop > 10) {
      setIsHidden(true);
      setTimeout(() => setIsHidden(false), 2000);
    } else {
      setIsHidden(false);
    }

    if (currentScrollTop >= 110) {
      setLinkColorBottom('#fff');
    } else {
      setLinkColorBottom('#000');
    }

    if (currentScrollTop >= (window.innerHeight - 110)) {
      setLinkColorTop('#fff');
    } else {
      setLinkColorTop('#000');
    }
  };

  useEffect(() => {
    console.log("test")

    window.addEventListener('scroll', handleScroll);
    //window.addEventListener('resize', handleColorChange);
    //handleColorChange(); // set initial color on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      //window.removeEventListener('resize', handleColorChange);
    };
  }, []);

  return (
    <div className={`menu-box${isHidden ? " hidden" : ""}`}>
      <ul style={{ listStyle: 'none' }}>
        <li id='menu-link-1' style={{ color: linkColorTop }}>Projects</li>
        <li id='menu-link-2' style={{ color: linkColorTop }} onClick={handleClick} >CV</li>
        <li id='menu-link-3' style={{ color: linkColorBottom }}> Temp</li>
        <li id='menu-link-4' style={{ color: linkColorBottom }}>Temp</li>
      </ul>
    </div>
  )
}
