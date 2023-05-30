import React from 'react';
import img from "../assets/portfolio.png";
import StaticCurvedText from './StaticCurvedText';

export default function ProjectCard({ name, desc, dateSpan, projectImg, gitRepoLink }) {
    return (
        <div className='project-card'>
            <div className='project-card-name'>
                <StaticCurvedText text={name} fontSize={1.5} />
            </div>
            <div className='project-card-innerbox'>
                <div className='project-card-innerbox-img-container'>
                    <img src={img} className='project-card-img'></img>
                </div>
                <div className='project-card-innerbox-desc'>
                    <div className='project-card-desc'>{desc}</div>
                    <div className='project-card-link'>
                        <a href={gitRepoLink} class="large material-icons">open_in_new</a>
                    </div>
                    <div className='project-card-date'>{dateSpan}</div>
                </div>
            </div>

        </div>
    )
}
