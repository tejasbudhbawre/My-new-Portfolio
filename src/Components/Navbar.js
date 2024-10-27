import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for the navbar

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="navbar-brand" onClick={toggleNavbar}>
                My-Portfolio
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="#home" onClick={toggleNavbar}>Home</a>
                <a href="#about" onClick={toggleNavbar}>About</a>
                <a href="#skills" onClick={toggleNavbar}>Skills</a>
                <a href="#experience" onClick={toggleNavbar}>Experience</a>
                <a href="#ctf" onClick={toggleNavbar}>CTF</a>
                <a href="#projects" onClick={toggleNavbar}>Projects</a>
                <a href="#contact" onClick={toggleNavbar}>Contact</a>
            </div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
