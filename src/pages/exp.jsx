import React from 'react';
import "./exp.css";
import lariosaLogo from "../assets/lariosa-logo.png"; // Add your logos
import leadSolutionsLogo from "../assets/lead-solutions-logo.png";

function Experience() {
  const experiences = [
    {
      company: "LARIOSA CLINIC AND HOSPITAL",
      position: "IT Staff & QA Tester",
      duration: "2025 - Present",
      logo: lariosaLogo,
      description: "Served as an IT Staff and QA Tester for the healthcare information system. Ensured system outputs comply with PhilHealth circulars and regulatory requirements, conducted testing and validation, and provided technical support to maintain system performance and meet user needs.",
      technologies: ["Healthcare Systems", "QA Testing", "PhilHealth Compliance", "Technical Support"],
    },
    {
      company: "LEAD SOLUTIONS INC.",
      position: "Full Stack Application Developer (Student Intern)",
      duration: "2024",
      logo: leadSolutionsLogo,
      description: "Developed and tested a cheque disbursement app using Flutter, ensuring accurate transaction processing, user-friendly interface, and system reliability.",
      technologies: ["Flutter", "Dart", "Full Stack", "Mobile Development"],
    }
  ];

  return (
    <div className="experience-page" id='experience'>
      
      <div className="experience-container">


        <div className="experience-content">
          <div className="section-header">
            <h1 className="section-title">Experience</h1>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot">
                  <div className="dot-inner"></div>
                </div>
                
                <div className="timeline-content">
                  <div className="company-header">
                    <div className="company-logo">
                      <img src={exp.logo || "https://via.placeholder.com/60x60/64ffda/0c0c0c?text=?"} alt={exp.company} />
                    </div>
                    <div className="company-info">
                      <h3 className="company-name">{exp.company}</h3>
                      <div className="position">{exp.position}</div>
                      <div className="duration">{exp.duration}</div>
                    </div>
                  </div>

                  <p className="job-description">{exp.description}</p>

                  <div className="job-details">
                    <div className="technologies">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;