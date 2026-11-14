import { useState } from "react";
import { education } from "../data/experience";

export default function Experience({ experience: list }) {
  const [tab, setTab] = useState("work");
  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="wrap">
        <p className="section-label">EXPERIENCE</p>
        <div className="tablist" role="tablist" aria-label="Experience">
          <button
            className={`tab ${tab === "work" ? "active" : ""}`}
            onClick={() => setTab("work")}
            role="tab"
            aria-selected={tab === "work"}
          >
            Work
          </button>
          <button
            className={`tab ${tab === "education" ? "active" : ""}`}
            onClick={() => setTab("education")}
            role="tab"
            aria-selected={tab === "education"}
          >
            Education
          </button>
        </div>
        {tab === "work" ? (
          <div role="tabpanel" id="tabpanel-work">
            {list.map((role) => (
              <div className="job-card" key={role.company}>
                <div className="job-header">
                  {role.url ? (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="job-company"
                    >
                      {role.company}
                    </a>
                  ) : (
                    <h3 className="job-company">{role.company}</h3>
                  )}
                  <span className="job-dates">{role.dates}</span>
                </div>
                <p className="job-role">{role.title}</p>
                <ul className="job-bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="job-bullet">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div role="tabpanel" id="tabpanel-education">
            <div className="education-card">
              <div className="education-header">
                <h3 className="education-school">{education.school}</h3>
                <span className="education-years">{education.years}</span>
              </div>
              <p className="education-degree">{education.degree}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
