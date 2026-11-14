export default function Nav() {
  const LINKS = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id.slice(1));
    if (el) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
    history.replaceState(null, "", id);
  };

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="nav-link"
            aria-current={href === "#home" ? "page" : undefined}
            onClick={handleClick(href)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
