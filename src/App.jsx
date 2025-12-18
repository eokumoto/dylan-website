// src/App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="nav">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">DT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="nav-links-mobile">
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      )}

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} DYLAN TAWATA · Landscape Architecture
        </p>
          <p className="contact-footer">
            <a href="mailto:dtawata@calpoly.edu">
              dtawata@calpoly.edu
            </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
