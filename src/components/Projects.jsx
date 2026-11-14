import { useState } from "react";
import { GitHubIcon } from "./icons";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 5l6 6 -6 6" />
  </svg>
);

function ProjectCard({ project }) {
  return (
    <article className="project-card" key={project.id}>
      {project.image && (
        <img
          src={project.image}
          alt=""
          className="project-image"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
      </div>
      <p className="project-desc">{project.problem}</p>
      <div className="tech-tags">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      <div className="project-button-container">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn project-github"
          aria-label={`${project.title} on GitHub`}
        >
          <GitHubIcon /> GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const handleToggle = () => {
    const next = !showAll;
    setShowAll(next);
    if (!next) {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="wrap">
        <div className="projects-header">
          <p className="section-label">PROJECTS</p>
          {rest.length > 0 && (
            <button
              type="button"
              className="toggle-btn"
              aria-expanded={showAll}
              aria-controls="projects-list"
              onClick={handleToggle}
            >
              {showAll ? "View less" : "View more"}
              <ArrowIcon />
            </button>
          )}
        </div>
        <div id="projects-list">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          {showAll &&
            rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
        </div>
      </div>
    </section>
  );
}
