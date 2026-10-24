import { skillGroups } from "../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.label}>01 / Skills</p>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={styles.card}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.list}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}