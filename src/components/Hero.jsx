import { DownloadIcon, LinkedInIcon, GitHubIcon, EmailIcon } from "./icons";

export default function Hero({ profile }) {
  return (
    <section id="home" className="section" aria-label="Hero">
      <div className="wrap">
        <div className="hero-inner">
          <h1>👋 Hi, Pratik here</h1>
          <p className="hero-role">Backend Engineer from Mumbai, India 🇮🇳</p>
          <p className="hero-pitch">
            I build REST APIs and data-driven applications in C# and .NET.
          </p>
          <div className="hero-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="Download resume"
            >
              <DownloadIcon /> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/pratikgholam/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/pratikgholam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-icon" aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
