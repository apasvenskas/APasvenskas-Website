import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import {Education} from './components/education';
import {Experience} from './components/experience';
import {Projects} from './components/projects';
import {Contacts} from './components/contacts';
import {AboutMe} from './components/about-me'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <header>
      <h1>Audrius Pasvenskas</h1>
      <div className='introduction'>
        <h3>Introduction</h3>
        <p className='introductoryParagraph'>Introductory text goes here: For example: Hello my name is Audrius and I am a software developer. My expertice and knowledge are primarly with HTML, CSS, Java Script, and React. I am also proficient with using Redux and some other tools that come with it such as Thunk.</p>
      </div>
      <nav>
        {/* <NavLink id="home" to="/">Home</NavLink> */}
        <NavLink id="education" to="education">Education</NavLink>
        <NavLink id="experience" to="experience">Experience & Previos Occupations</NavLink>
        <NavLink id="projects" to="projects">Previos projects</NavLink>
        <NavLink id="about-me" to="about-me">Where I Come From</NavLink>
        <NavLink id="contacts" to="contacts">Contacts</NavLink>
      </nav>
        {/* <Routes path="/" element={<Home />} /> */}
        <Routes path="education" element={<Education />} />
        <Routes path="Education" element={<Experience />} />
        <Routes path="projects" element={<Projects />} />
        <Routes path="about-me" element={<AboutMe />} />
        <Routes path="contacts" element={<Contacts />} />
    </header>
    </div>

    </BrowserRouter>
  );
}

export default App;
