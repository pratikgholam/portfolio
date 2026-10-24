import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <p className={styles.label}>02 / Projects</p>
      <div className={styles.list}>
        {projects.map((p) => (
          <article key={p.id} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.num}>{p.id}</span>
              <span className={styles.status}>{p.status}</span>
            </div>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.description}</p>
            <ul className={styles.highlights}>
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <ul className={styles.stack}>
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a className={styles.btn} href={p.repo} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}