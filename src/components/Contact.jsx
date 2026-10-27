import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { IconGithub, IconLinkedin, IconMail } from "./icons";
import { profile } from "../data/profile";

const LINKS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: IconMail,
  },
  {
    label: "GitHub",
    value: "github.com/pratikgholam",
    href: "https://github.com/pratikgholam",
    Icon: IconGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pratikgholam",
    href: "https://www.linkedin.com/in/pratikgholam/",
    Icon: IconLinkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="tag complete">Contact</span>
          Let&rsquo;s talk
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="contact-grid"
        >
          {LINKS.map(({ label, value, href, Icon, external }) => (
            <motion.a
              key={label}
              href={href}
              className="card contact-card"
              variants={fadeUp}
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
            >
              <span className="contact-icon">
                <Icon />
              </span>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
