import React,{useEffect} from 'react';
import TimelineEntry from './TimelineEntry';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Timeline() {
  useEffect(() => {
    AOS.init();
}, [])
  const timelineEntries = [
    {
      id: 1,
      dateSpan: "April 2020 - March 2024",
      institute: "University of Applied Sciences: HTW Berlin",
      description: "Bachelor's degree in applied computer science"
    },
    {
      id: 2,
      dateSpan: "October 2021 - January 2022",
      institute: "University of Applied Sciences: HTW Berlin",
      description: "Tutor for the course programming 2"
    },
    {
      id: 3,
      dateSpan: "October 2019 - March 2020",
      institute: "University of Bielefeld",
      description: "Bachelor's degree in computer science major and mathematics minor subject"
    },
    {
      id: 4,
      dateSpan: "2011 - 2019",
      institute: "High school: HAG Lengerich",
      description: "Abitur with advanced courses in computer science and mathematics"
    },
    {
      id: 5,
      dateSpan: "2019 - 2020",
      institute: "20° HandWerk zum Wohnen",
      description: "Minor employment in accounting"
    }
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className='CV-timeline'>
      {timelineEntries.map((entry) => (
        <TimelineEntry
          key={entry.id}
          dateSpan={entry.dateSpan}
          institute={entry.institute}
          description={entry.description}
        />
      ))}
      <span className='CV-timeline-line'></span>
    </div>
  )
}
