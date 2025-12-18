import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  return (
    <main className="page projects-page">
      <section className="section">
        <h1 className="page-title">Projects</h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.slug} className="project-tile">
              <Link to={`/projects/${project.slug}`}>
                <div className="project-image-wrapper">
                  <img src={project.coverImage} alt={project.title} />
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-location">{project.location}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
