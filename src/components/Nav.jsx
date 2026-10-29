import { useEffect, useRef, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState("hero");
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const ids = ["hero", "about", "experience", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-120px 0% -75% 0%", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const onKeydown = (e) => {
      if (e.key === "Escape") {
        setExpanded(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [expanded]);

  const toggleMenu = () => setExpanded((prev) => !prev);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-brand">
          Pratik Gholam
        </a>
        <button
          ref={toggleRef}
          className="nav-toggle"
          aria-expanded={expanded}
          aria-controls="nav-menu"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <div
          className={`nav-links ${expanded ? "open" : ""}`}
          id="nav-menu"
          hidden={!expanded}
        >
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-current={activeId === href.slice(1) ? "page" : undefined}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="btn primary"
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
