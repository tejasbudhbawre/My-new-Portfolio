import React from 'react';
import './Project.css';

const Projects = () => {
    return (
        <div className="projects-section">
            <h2>Projects</h2>
            <div className="major-project">
                <h3>Major Project</h3>
                <p>
                    I am currently working on my college website, a major project that involves advanced web development skills. This website is set to launch soon and will showcase the hard work and expertise gained throughout my course.
                </p>
            </div>
            
            <div className="small-projects">
                <h3>Other Projects</h3>
                <p>
                    I have completed various smaller projects focused on web development and cybersecurity, which you can find on my <a href="https://github.com/tejasbudhbawre" target="_blank" rel="noopener noreferrer">GitHub profile</a>.
                </p>
            </div>
        </div>
    );
};

export default Projects;
