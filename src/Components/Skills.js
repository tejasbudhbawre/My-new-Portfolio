import React from 'react';
import './Skills.css';

const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 
    'Node.js', 'Express.js', 'MongoDB', 'SQL', 
    'PHP', 'Web Security', 'Ethical Hacking', 
    'Penetration Testing', 'Vulnerability Assessment'
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>My Skillset</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-circle">
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
