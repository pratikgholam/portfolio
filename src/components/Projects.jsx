import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Projects({ projects }) {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="section" id="projects" aria-label="Projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="tag complete">Selected</span> Selected projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="projects-list"
        >
          {projects.map((project) => {
            const isOpen = openId === project.id;
            const statusClass =
              project.status === "Complete" ? "complete" : "progress";
            return (
              <motion.div
                key={project.id}
                className="card project-card"
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`tag ${statusClass}`}
                  style={{
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  {project.status}
                </div>
                <h3 style={{ margin: "0 0 1rem" }}>{project.title}</h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-field">
                  <span className="project-field-label">Problem</span>
                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      margin: "0 0 1.25rem",
                    }}
                  >
                    {project.problem}
                  </p>
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
                  <button
                    className="btn"
                    type="button"
                    onClick={() =>
                      setOpenId(openId === project.id ? null : project.id)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`details-${project.id}`}
                  >
                    Details
                  </button>
                </div>

                <motion.div
                  id={`details-${project.id}`}
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{
                    maxHeight: isOpen ? 2000 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    maxHeight: { type: "spring", stiffness: 300, damping: 32 },
                    opacity: { duration: 0.2 },
                  }}
                  style={{ overflow: "hidden", marginTop: "1rem" }}
                >
                  <div>
                    {isOpen && (
                      <>
                        <a
                          href="#"
                          className="collapse-link"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenId(null);
                          }}
                        >
                          Collapse
                        </a>

                        <div className="project-field">
                          <span className="project-field-label">Built</span>
                          <p
                            style={{
                              color: "#cbd5e1",
                              fontSize: "1.05rem",
                              lineHeight: 1.7,
                              margin: "0 0 1.25rem",
                            }}
                          >
                            {project.built}
                          </p>
                        </div>

                        <div className="project-field">
                          <span className="project-field-label">
                            Key decisions
                          </span>
                          <p
                            style={{
                              color: "#cbd5e1",
                              fontSize: "1.05rem",
                              lineHeight: 1.7,
                              margin: "0 0 1.25rem",
                            }}
                          >
                            {project.decisions}
                          </p>
                        </div>

                        <div className="project-field">
                          <span className="project-field-label">
                            Tested / evaluated
                          </span>
                          <p
                            style={{
                              color: "#cbd5e1",
                              fontSize: "1.05rem",
                              lineHeight: 1.7,
                              margin: "0 0 1.5rem",
                            }}
                          >
                            {project.evaluated}
                          </p>
                        </div>

                        <h3 style={{ margin: "0 0 0.5rem" }}>
                          Architecture notes
                        </h3>
                        <p style={{ marginBottom: "1.5rem" }}>
                          [TODO: architecture notes]
                        </p>

                        <h3 style={{ margin: "0 0 0.5rem" }}>
                          Screenshot / diagram
                        </h3>
                        <div className="modal-slot">
                          [TODO: screenshot or diagram]
                        </div>

                        <h3 style={{ margin: "1.5rem 0 0.5rem" }}>
                          Challenges
                        </h3>
                        <p style={{ marginBottom: "1.5rem" }}>
                          [TODO: challenges]
                        </p>

                        <h3 style={{ margin: "0 0 0.5rem" }}>
                          What I learned
                        </h3>
                        <p style={{ marginBottom: "1.5rem" }}>
                          [TODO: what I learned]
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
