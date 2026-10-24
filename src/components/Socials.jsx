import { profile } from "../data/profile";
import styles from "./Socials.module.css";

export default function Socials() {
  return (
    <section id="socials" className={styles.section}>
      <p className={styles.label}>03 / Socials</p>
      <h2 className={styles.heading}>Let's talk.</h2>
      <div className={styles.actions}>
        <a className={styles.primary} href={`mailto:${profile.email}`}>Email</a>
        <a className={styles.secondary} href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className={styles.secondary} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}