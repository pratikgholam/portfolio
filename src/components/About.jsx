import { motion } from "framer-motion";
import { fadeUp } from "./animations";

const STATS = ["5+ years", "C# / .NET Core", "SQL Server", "Remote-friendly"];

export default function About() {
  return (
    <section className="section" id="about" aria-label="About">
      <div className="container">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="about-text">
            I'm a software engineer with 5+ years of experience building backend systems and APIs in C#, .NET Core, and SQL Server. I've worked on loan-platform APIs, ERP payroll features, and a real-time hardware monitoring client. I'm currently building public projects, including a retrieval-based Q&A app. I'm based in India and open to remote roles.
          </p>
          <div className="stat-chips">
            {STATS.map((stat) => (
              <span key={stat} className="stat-chip">
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
