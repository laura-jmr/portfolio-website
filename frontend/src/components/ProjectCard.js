import React from 'react';
import image from "../assets/background-peaks.png";

export default function ProjectCard({ name, desc, dateSpan, projectImg, gitRepoLink }) {
    return (
        <div className='project-card'>
            <div className='project-card-name'>{name}</div>
            <div className='project-card-innerbox'>
                <div className='project-card-innerbox-img-container'>
                    <img href={image} className='project-card-img'></img>
                </div>
                <div className='project-card-innerbox-desc'>
                    <div className='project-card-desc'>{desc}</div>
                    <div className='project-card-link'>{gitRepoLink}</div>
                    <div className='project-card-date'>{dateSpan}</div>
                </div>
            </div>

        </div>
    )
}
