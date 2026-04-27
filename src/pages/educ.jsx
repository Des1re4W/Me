import React from 'react';
import "./educ.css";

function Educ() {
  const education = [
    {
      school: "NOTRE DAME OF MARBEL UNIVERSITY",
      degree: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      duration: "2021 - 2025",
      description: "Worked on various academic and personal projects that provided hands-on experience in programming, web and mobile app development, and database management.",
      skills: ["React", "Flutter", "Node.js", "SQL", "Python", "JavaScript", "Flowchart"],
    },
    {
      school: "LIBERTAD NATIONAL HIGH SCHOOL",
      degree: "SECONDARY EDUCATION",
      duration: "2012 - 2019",
      description: "Focused on developing a strong foundation in accounting principles and financial management. Gained hands-on experience with personal accounting, bookkeeping, and basic financial analysis.",
      skills: ["Excel", "Accounting", "Financial Analysis", "Bookkeeping"],
    }
  ];

  return (
    <div className="education-alt-page" id="education">
      <div className="education-alt-container">
        <div className="section-header">
          <h1 className="section-title">Education</h1>
          <p className="section-subtitle">Academic Journey</p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="card-header">
                <div className="school-badge">
                  <span className="badge-number">{index + 1}</span>
                </div>
                <div className="school-info">
                  <h3 className="school-name">{edu.school}</h3>
                  <div className="degree">{edu.degree}</div>
                </div>
              </div>

              <div className="card-stats">
                <div className="stat">
                  <span className="stat-value">{edu.duration}</span>
                  <span className="stat-label">Duration</span>
                </div>
                <div className="stat">
                </div>
                <div className="stat">
                </div>
              </div>

              <p className="card-description">{edu.description}</p>

              <div className="card-footer">
                <div className="skills-grid">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Educ;