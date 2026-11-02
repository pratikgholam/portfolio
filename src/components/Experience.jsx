import { education } from "../data/experience";

export default function Experience({ experience: list }) {
  const SUMMARY = {
    "Algorithms Software":
      "ERP payroll module; bulk employee-image import via Excel; SQL queries, stored procedures and client-side fixes.",
    EECI:
      "Real-time hardware monitoring desktop client; charted machine data over Ethernet via C/C++ interop (P/Invoke).",
    "D2K Technologies":
      "Loan-platform REST APIs (CRUD) for a mobile app; JWT authentication; endpoints shaped with the frontend team.",
    "LearningMate Solutions":
      "E-learning course content for K-12 sections; placeholder sections for client-hosted videos.",
  };

  return (
    <section className="section" id="experience" aria-label="Experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {list.map((role) => (
            <div className="role" key={role.company}>
              <div className="role-head">
                <h3 className="role-company">{role.company}</h3>
                <p className="role-title">{role.title}</p>
                <div className="role-meta">
                  <span>{role.dates}</span>
                  {role.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
              <p className="role-summary">{SUMMARY[role.company]}</p>
            </div>
          ))}
        </div>
        <div className="education">
          <p>
            <strong>Education:</strong>{" "}
            {education.degree}, {education.school} ({education.years}).
          </p>
        </div>
      </div>
    </section>
  );
}
