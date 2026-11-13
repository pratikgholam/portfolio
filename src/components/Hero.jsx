import { motion } from "framer-motion";
import { scrollSection } from "./animations";

export default function Hero({ profile }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={scrollSection}
      viewport={{ once: true }}
      className="section" id="hero" aria-label="Hero"
    >
      <div className="container">
        <div className="hero-lede">
          <h1 className="lede-title">{profile.name}</h1>
          <p className="hero-sentence">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              See my work
            </a>
            <a
              href="/resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Download resume
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
