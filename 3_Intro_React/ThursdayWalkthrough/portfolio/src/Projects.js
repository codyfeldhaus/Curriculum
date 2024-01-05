import React from 'react';

function Projects() {
    const projects = [
        { name: 'Project 1', description: 'Description for Project 1' },
        // Add more projects as needed
    ];

    return (
        <div className="projects">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
