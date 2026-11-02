import {
  SkillCsharp,
  SkillDotnet,
  SkillSql,
  SkillPostgres,
  SkillSqlite,
  SkillReact,
  SkillCopilot,
  SkillAzureDevops,
} from "./icons";

const ICON_BY_KEY = {
  csharp: SkillCsharp,
  dotnet: SkillDotnet,
  sql: SkillSql,
  postgres: SkillPostgres,
  sqlite: SkillSqlite,
  react: SkillReact,
  javascript: undefined,
  azuredevops: SkillAzureDevops,
  copilot: SkillCopilot,
  aspnetmvc: undefined,
  rest: undefined,
};

export default function Skills({ skills }) {
  return (
    <section className="section" id="skills" aria-label="Skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = ICON_BY_KEY[skill.icon];
            return (
              <span key={skill.name} className="skill-chip">
                {Icon ? <Icon className="skill-icon" aria-hidden="true" /> : (
                  <span className="chip" style={{ display: "inline-block", marginRight: "0.4rem" }}>
                    {skill.badge || skill.name.slice(0, 1).toUpperCase()}
                  </span>
                )}
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
