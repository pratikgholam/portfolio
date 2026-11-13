import { motion } from "framer-motion";
import { scrollSection } from "./animations";
import { education } from "../data/experience";

export default function Experience({ experience: list }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={scrollSection}
      viewport={{ once: true }}
      className="section"
      id="experience"
      aria-label="Experience"
    >
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {list.map((role) => (
            <div className="role" key={role.company}>
              <div className="role-head">
                <h3 className="role-company">{role.company}</h3>
                <p className="role-title">{role.title}</p>
                <div className="role-meta">
                  <span>{role.dates}</span>
                  {role.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
              <ul className="role-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="role-bullet">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="education">
          <p>
            <strong>Education:</strong>{" "}
            {education.degree}, {education.school} ({education.years}).
          </p>
        </div>
      </div>
    </motion.section>
  );
}
