import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {
    return (
        <div>
            <header>
                <nav>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
