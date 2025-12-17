// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="nav">
        <Link to="/" className="nav-logo">
          <span className="logo-text">DYLAN TAWATA</span>
        </Link>

        <nav className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

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
      </footer>
    </div>
  );
}

export default App;
