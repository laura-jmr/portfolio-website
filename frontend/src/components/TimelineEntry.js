import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TimelineEntry({ dateSpan, institute, description }) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className="CV-timeline-entry">
            <div className="CV-timeline-entry-date-span">{dateSpan}</div>
            <span className='dot'></span>
            <div className='CV-timeline-entry-right-container'>
                <div className="CV-timeline-entry-description">{description}</div>
                <div className="CV-timeline-entry-institute">{institute}</div>
            </div>
        </div>
    )
}
