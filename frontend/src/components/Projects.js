import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projectCards = [
        {
            id: 1,
            name: "Portfolio Website",
            dateSpan: "April 2023",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus e",
            gitRepoLink: "github.com/laura-jmr",
            imageLink: "../assets/react-logo.png"
        },
        {
            id: 2,
            name: "Portfolio Website",
            dateSpan: "April 2023",
            description: "test",
            gitRepoLink: "github.com/laura-jmr",
            imageLink: "github.com/laura-jmr"
        },
        {
            id: 3,
            name: "Portfolio Website",
            dateSpan: "April 2023",
            description: "test",
            gitRepoLink: "github.com/laura-jmr",
            imageLink: "github.com/laura-jmr"
        },
    ];
    return (
        <div className='projects-container'>
            {projectCards.map((entry) => (
                <ProjectCard
                    key={entry.id}
                    name={entry.name}
                    desc={entry.description}
                    dateSpan={entry.dateSpan}
                    gitRepoLink={entry.gitRepoLink}
                    projectImg={entry.imageLink}
                />
            ))}

        </div>
    )
}
