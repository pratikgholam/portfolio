import { motion } from "framer-motion";
import { scrollSection } from "./animations";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={scrollSection}
      viewport={{ once: true }}
      className="footer"
    >
      <div className="container">
        <p className="footer-name">{profile.name}</p>
      </div>
    </motion.footer>
  );
}
