import React, { useState } from 'react';
import './Skills.css';

const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 
    'Node.js', 'Express.js', 'MongoDB', 'SQL', 
    'PHP', 'Web Security', 'Ethical Hacking', 
    'Penetration Testing', 'Vulnerability Assessment'
];

const Skills = () => {
    // State to track which skill was clicked
    const [clickedSkillIndex, setClickedSkillIndex] = useState(null);

    const handleSkillClick = (index) => {
        setClickedSkillIndex(index);
        // Reset the clicked state after animation is complete
        setTimeout(() => {
            setClickedSkillIndex(null);
        }, 600); // Match the animation duration
    };

    return (
        <section id="skills" className="skills-section">
            <h2>My Skillset</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className={`skill-circle ${clickedSkillIndex === index ? 'clicked' : ''}`} 
                        onClick={() => handleSkillClick(index)}
                    >
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
