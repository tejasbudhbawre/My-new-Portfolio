import React from 'react';
import './CTF.css';
//import ctfImage from './path/to/your-ctf-image.jpg'; // Replace with your image path

const Ctf = () => {
    return (
        <div className="ctf-section">
            <div className="ctf-text">
                <h2>CTF Enthusiast</h2>
                <p>
                    I'm highly passionate about cybersecurity and love participating in Capture The Flag (CTF) events. 
                    Recently, I was part of the development team for the EncipherX cybersecurity CTF event at Technex 2024, 
                    working under the guidance of senior mentors. It was a valuable experience, allowing me to contribute 
                    to creating challenging problems for participants and enhancing my cybersecurity skills.
                </p>
            </div>
            <div className="ctf-image">
                <img src='' alt="EncipherX CTF Event" />
            </div>
        </div>
    );
};

export default Ctf;
