import { profile } from "../data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.label}>00 / Introduction</p>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.title}>{profile.title}</p>
      <p className={styles.intro}>{profile.intro}</p>
      <div className={styles.actions}>
        <a className={styles.primary} href="#projects">View projects</a>
        <a className={styles.secondary} href="#socials">Contact</a>
      </div>
    </section>
  );
}