import "./App.css";
import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Education } from "../components/education";
import { Experience } from "../components/experience";
import { Projects } from "../components/projects";
import { AboutMe } from "../components/about-me";
import Game from "../components/Game/snakeGame";
import Home from "../components/home";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Header />
          <nav className="nav">
            <NavLink id="games" to="/home">
              Games
            </NavLink>
            <NavLink id="education" to="/education">
              Education
            </NavLink>
            <NavLink id="experience" to="/experience">
              Experience & Previos Occupations
            </NavLink>
            <NavLink id="projects" to="/projects">
              Previos projects
            </NavLink>
            <NavLink id="about-me" to="/about-me">
              Where I Come From
            </NavLink>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
