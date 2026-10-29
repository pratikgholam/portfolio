import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import {
  SkillCsharp,
  SkillDotnet,
  SkillSql,
  SkillPython,
  SkillReact,
  SkillPostgres,
  SkillSqlite,
  SkillCopilot,
  SkillAzureDevops,
} from "./icons";

const ICONS = {
  csharp: SkillCsharp,
  dotnet: SkillDotnet,
  sql: SkillSql,
  python: SkillPython,
  react: SkillReact,
  postgres: SkillPostgres,
  sqlite: SkillSqlite,
  copilot: SkillCopilot,
  azuredevops: SkillAzureDevops,
};

export default function Skills({ skills }) {
  return (
    <section className="section" id="skills" aria-label="Skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="tag complete">Toolbox</span>
          Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="skills-row"
        >
          {skills.map((skill) => {
            const Icon = ICONS[skill.icon];
            return (
              <motion.div
                key={skill.name}
                className="skill-chip"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                style={{ "--skill-color": skill.color }}
              >
                {Icon ? (
                  <span
                    className="skill-chip-icon"
                    style={{ color: skill.color }}
                  >
                    <Icon />
                  </span>
                ) : (
                  <span
                    className="skill-chip-icon skill-chip-icon-text"
                    style={{ color: skill.color }}
                  >
                    {skill.badge}
                  </span>
                )}
                <span className="skill-chip-name">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
