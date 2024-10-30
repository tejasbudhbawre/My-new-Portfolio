import React from 'react';
import Typical from 'react-typical'; // Ensure you have this library installed
//import './Home.css'; // Assume CSS is defined separately for styling

export default function Home() {
  return (
    <div className="home-container">
      {/* Name Section */}
      <div className="profile-name">
        <span className="primary-text">
          Hello, I'm <span className="highlighted-text">Tejas Budhbawre</span>
        </span>
      </div>

      {/* Role Section with Typing Effect */}
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
        <span className="profile-tagline">
          Cybersecurity Enthusiast | Web Developer | Future-Proofing Web Applications | Pentester
        </span>
      </div>

      {/* Action Buttons */}
      <div className="profile-options">
        <button className="btn primary-btn">Hire Me</button>
        <a href="Resume.pdf" download="Tejas_Budhbawre_Resume.pdf">
          <button className="btn highlighted-btn">Get Resume</button>
        </a>
      </div>
    </div>
  );
}
