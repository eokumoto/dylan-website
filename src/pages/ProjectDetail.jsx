// src/pages/ProjectDetail.jsx
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const gallery = project?.gallery && project.gallery.length > 0
    ? project.gallery
    : project
    ? [project.coverImage]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = gallery[currentIndex];

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

        <h1 className="project-title-big">{project.title}</h1>
        <p className="project-location-detail">{project.location}</p>

        <div className="project-detail-layout">
          {/* LEFT: main image + gallery */}
          <div className="project-gallery">
            <div className="project-main-image">
              <img src={currentImage} alt={project.title} />
            </div>

            {gallery.length > 1 && (
              <div className="project-thumbs-row">
                {gallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className={
                      "project-thumb" +
                      (index === currentIndex ? " project-thumb-active" : "")
                    }
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img src={src} alt={`${project.title} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: text */}
          <div className="project-text-panel">
            <p className="project-body">
              {project.summary}
            </p>

            {/* you can add more structured fields later, like: */}
            {/* <p>Year: 2023</p> */}
            {/* <p>Type: Public space</p> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
