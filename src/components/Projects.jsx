import { motion } from "framer-motion";
import { scrollSection } from "./animations";

export default function Projects({ projects }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={scrollSection}
      viewport={{ once: true }}
      className="section section--band section--loose"
      id="projects"
      aria-label="Projects"
    >
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-status">{project.status}</span>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="project-problem">{project.problem}</p>
                <div className="project-meta">
                  {project.built && (
                    <div className="meta-line">
                      <strong>Built:</strong>{" "}
                      {project.built}
                    </div>
                  )}
                </div>
              </div>
              <div className="project-actions">
                <a
                  href={project.repo}
                  className="btn"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="btn"
                    target="_blank"
                    rel="noopener"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
