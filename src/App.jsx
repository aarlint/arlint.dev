import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';
import './styles/ThemeSelector.css';
import Navbar from './components/Navbar';
import SectionContainer from './components/SectionContainer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import BluetoothDebugger from './bluetooth/BluetoothDebugger';

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <SectionContainer id="home" fullHeight={true}>
          <Home />
        </SectionContainer>

        <SectionContainer id="about">
          <About />
        </SectionContainer>

        <SectionContainer id="skills">
          <Skills />
        </SectionContainer>

        <SectionContainer id="experience">
          <Experience />
        </SectionContainer>

        <SectionContainer id="education">
          <Education />
        </SectionContainer>

        <SectionContainer id="projects">
          <Projects />
        </SectionContainer>

        <SectionContainer id="contact">
          <Contact />
        </SectionContainer>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/bluetooth" element={<BluetoothDebugger />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
