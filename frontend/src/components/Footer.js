import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className='footer'>Footer</div>
  )
}