import React from 'react';
import './About.css';
import myPhoto from '../assets/tejas.png'; // Update with your image path
import Typical from 'react-typical'

const About = () => {
    return (
        <div className="about-section">
            <div className="about-photo">
                <img src={myPhoto} alt="Tejas Budhbawre" />
            </div>
            <div className="about-text">
                <h2>About Me</h2>
                <div className="profile-role">
                        <h1>
                            <Typical 
                                loop={Infinity}
                                steps={[
                                    "Software Developer", 2000,
                                    "Full Stack Developer", 2000,
                                    "Web Developer", 2000,
                                    "Cybersecurity Enthusiast", 2000,
                                ]}
                            />
                        </h1>
                    </div>
                    
                    {/* Tagline */}
                    <span className="profile-tagline">
                        Cybersecurity Enthusiast | Web Developer | Future-Proofing Web Applications | Pentester
                    </span>
                     <h1> My name is Tejas Budhbaware, and I am a 3rd-year student of 
                        Computer Science and Engineering with a focus on Cybersecurity. I have hands-on 
                        experience in ethical hacking and penetration testing, allowing me to explore and 
                        understand vulnerabilities in web applications. 
                    <br/>
                        I am also enthusiastic about participating in Capture The Flag (CTF) competitions, 
                        which not only challenge my skills but also deepen my understanding of cybersecurity 
                        concepts and practices. My passion for web development, particularly with the MERN stack, 
                        complements my cybersecurity journey as I strive to create secure and robust applications.
                    </h1>    
            </div>
        </div>
    );
};

export default About;