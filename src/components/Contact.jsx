import { IconGithub, IconLinkedin, IconMail } from "./icons";
import { profile } from "../data/profile";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: IconMail },
  { label: "GitHub", value: "github.com/pratikgholam", href: "https://github.com/pratikgholam", Icon: IconGithub, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/pratikgholam", href: "https://www.linkedin.com/in/pratikgholam/", Icon: IconLinkedin, external: true },
];

export default function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-statement">Open to remote roles — let&rsquo;s talk.</p>
        <div className="contact-grid">
          {LINKS.map(({ label, value, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              className="contact-card"
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
            >
              <span className="contact-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
