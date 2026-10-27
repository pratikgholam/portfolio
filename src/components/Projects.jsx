import { motion } from "framer-motion";
import { fadeUp, staggerVertical } from "./animations";

export default function Projects({ projects }) {
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
          <span className="tag complete">Built</span>
          What I&rsquo;ve shipped
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVertical}
          className="projects-list"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card project-card"
              whileHover={{ x: -10 }}
              variants={fadeUp}
            >
              <div
                className={`tag ${project.status.toLowerCase()}`}
                style={{ display: "inline-block", marginBottom: "1rem" }}
              >
                {project.status}
              </div>
              <h3 style={{ margin: "0 0 0.5rem" }}>{project.title}</h3>
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "0.75rem",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                }}
              >
                {project.tagline}
              </p>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {project.description}
              </p>
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
              <a
                href={project.link}
                className="btn"
                style={{ width: "fit-content" }}
                target="_blank"
                rel="noopener"
              >
                Details →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
