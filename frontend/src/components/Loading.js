import React, { useRef, useEffect, useState } from 'react'

export default function Loading() {
  const mesh = useRef(null);
  const meshLoader = useRef(null);
  const meshContainer = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      mesh.current.classList.add('hide');
      meshLoader.current.classList.add('hide');
      setHidden(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };

  }, []);


  useEffect(() => {
    if (hidden) {
      setTimeout(() => {
        meshContainer.current.style.display = 'none';
      }, 2000);
    }
  }, [hidden]);

  return (
    <div id="loading" ref={meshContainer}>
      <span id='loading-bg' ref={mesh}></span>
      <div id="loader" ref={meshLoader}>
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>
    </div>
  )
}
