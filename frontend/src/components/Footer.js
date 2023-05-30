import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className='footer'>
      <div className='footer-terms-container'>
        <span>&copy; Laura Jürgensmeier 2023</span>
        <a>Terms</a>
        <a>Privacy</a>
        <a>Imprint</a>
      </div>
    </div>
  )
}
