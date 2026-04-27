import React from 'react';
import "./about.css";

function About() {
  return (
    <div className="about-page" id='about'>
      <div className="bg-grid"></div>
      
      <div className="about-container">


        {/* Main Content */}
        <div className="about-content">
          <div className="section-header">
            <h1 className="section-title">About Me</h1>
            
          </div>
          <div className="about-main">
            <div className="about-text">
              <p className="about-lead">
                I am a <span className="highlight">Computer Science graduate</span> with a strong interest in 
                software development, problem-solving, and learning emerging technologies.
              </p>
              
              <p className="about-body">
                I am also <span className="highlight">system-oriented</span>, able to understand how different
                components work together and approach challenges with an overall view. As a 
                <span className="highlight">work-based learner</span>, I gained practical experience in 
                applying what I've learned in real-world scenarios.
              </p>
              
              <p className="about-body">
                I have also developed <span className="highlight">proficiency in Excel</span> and strong 
                accuracy in data encoding through various school projects, enabling me to handle 
                and organize information efficiently.
              </p>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;