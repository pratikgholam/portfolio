import { motion } from "framer-motion";
import { scrollSection } from "./animations";

export default function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={scrollSection}
      viewport={{ once: true }}
      className="section section--tight"
      id="about"
      aria-label="About"
    >
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="about-role">Software Engineer &middot; C# / .NET Core / SQL Server</p>
        <p className="about-text">
          I&rsquo;m a software engineer with 5+ years of experience building backend systems and APIs in C#, .NET Core, and SQL Server. I&rsquo;ve worked on loan-platform APIs, ERP payroll features, and a real-time hardware monitoring client. I&rsquo;m currently building public projects, including a retrieval-based Q&amp;A app. I&rsquo;m based in India and open to remote roles.
        </p>
      </div>
    </motion.section>
  );
}
