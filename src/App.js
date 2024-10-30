import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import CTF from './Components/CTF';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="home">
            <h1>Welcome to My Portfolio</h1>
                
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="ctf">
                <CTF />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
