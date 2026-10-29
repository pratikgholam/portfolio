import { motion } from "framer-motion";
import { fadeUp, staggerVertical } from "./animations";
import { education } from "../data/experience";

export default function Experience({ experience: list }) {
  return (
    <section className="section" id="experience" aria-label="Experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="tag complete">Work</span> Experience
        </motion.h2>

        <motion.div
          className="timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVertical}
        >
          {list.map((role) => (
            <motion.div
              key={role.company}
              className="timeline-item"
              variants={fadeUp}
            >
              <div className="card">
                <div className="role-head">
                  <div>
                    <h3 style={{ margin: "0 0 0.25rem" }}>{role.title}</h3>
                    <p
                      className="role-company"
                      style={{ margin: 0, color: "#94a3b8" }}
                    >
                      {role.company}
                    </p>
                    <p
                      className="role-dates"
                      style={{ margin: 0, color: "#94a3b8", fontSize: "0.9rem" }}
                    >
                      {role.dates}
                    </p>
                  </div>
                  <div className="role-tags">
                    {role.tags.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="role-bullets">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="education">
          <p style={{ margin: 0 }}>
            <strong>Education:</strong>{" "}
            {education.degree}, {education.school} ({education.years}).
          </p>
        </div>
      </div>
    </section>
  );
}
