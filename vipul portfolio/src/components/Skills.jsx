import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I've worked with</p>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Redux</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;