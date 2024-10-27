import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // Import the Navbar component
import About from './Components/About'; // Placeholder for the About component
import Skills from './Components/Skills'; // Placeholder for the Skills component
import Experience from './Components/Experience'; // Placeholder for the Experience component
import CTF from './Components/CTF'; // Placeholder for the CTF component
import Projects from './Components/Project'; // Placeholder for the Projects component
import Contact from './Components/Contact'; // Placeholder for the Contact component

function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="home">
                <h1>Welcome to My Portfolio</h1>
            </section>
            <About />
            <Skills />
            <CTF />
            <Experience />
            <Projects />
            <Contact />
            
        </div>
    );
}

// Sample placeholder components
//const About = () => <section id="about"><h2>About Me</h2></section>;
//const Skills = () => <section id="skills"><h2>Skills</h2></section>;
//const Experience = () => <section id="experience"><h2>Experience</h2></section>;
//const CTF = () => <section id="ctf"><h2>CTF Competitions</h2></section>;
//const Projects = () => <section id="projects"><h2>Projects</h2></section>;
//const Contact = () => <section id="contact"><h2>Contact</h2></section>;

export default App;
