import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="page">
        <section className="section">
          <p>Project not found.</p>
          <Link to="/projects" className="btn btn-primary">
            Back to projects
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page project-detail-page">
      <section className="section">
        <Link to="/projects" className="back-link">
          ← All projects
        </Link>

        <h1 className="page-title">{project.title}</h1>
        <p className="project-location-detail">{project.location}</p>

        <div className="project-hero-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-body">
          <p>{project.summary}</p>
          {/* later you can add year, role, more images, drawings, etc. */}
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
