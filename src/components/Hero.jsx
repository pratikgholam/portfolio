import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function Hero({ profile }) {
  return (
    <section className="section" id="hero" aria-label="Hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="tag complete hero-status">
            Open to backend / AI roles
          </span>
          <h1 className="hero-title">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-sub">{profile.boldClaim}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              See my work
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
