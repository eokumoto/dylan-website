// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./home.css";

function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // same movement for both lines
  const textOffset = offset * 0.2;

  return (
    <>
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-overlay" />

        <div className="home-content">
          <h1
            className="home-name"
            style={{ transform: `translateY(${textOffset}px)` }}
          >
            DYLAN TAWATA
          </h1>
          <p
            className="home-tagline"
            style={{ transform: `translateY(${textOffset}px)` }}
          >
            LANDSCAPE ARCHITECT
          </p>
        </div>
      </section>

      {/* PROJECT PREVIEW STRIP */}
      <section className="home-projects-preview">
        <div className="home-projects-header">
          <h2>Projects</h2>
          <Link to="/projects" className="see-all-link">
            See all →
          </Link>
        </div>

        <div className="home-projects-row">
          {projects.slice(0, 4).map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="home-project-thumb"
            >
              <div className="home-project-image-wrapper">
                <img src={project.coverImage} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.location}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* GO TO ABOUT SECTION */}
      <section className="go-to-about">
        <div className="home-about-header">
          <h2>About Me</h2>
          <Link to="/about" className="about-me-link">
            Learn more →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
