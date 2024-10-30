// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">My Portfolio</div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#about" onClick={toggleMenu}>About</a>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#experience" onClick={toggleMenu}>Experience</a>
                <a href="#ctf" onClick={toggleMenu}>CTF</a>
                <a href="#project" onClick={toggleMenu}>Projects</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}

export default Navbar;
