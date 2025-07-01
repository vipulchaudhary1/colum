import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {/* Repeat for each experience */}
          <div className="timeline-item">
            <div className="timeline-date">March 2024 - Present</div>
            <div className="timeline-content">
              <h3> Frontend Developer/Trainer</h3>
              <h4>Red And White</h4>
              <ul>
                <li>Built Interview AI system</li>
                <li>Conduct interviews</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">March 2019-2022</div>
            <div className="timeline-content">
              <h3>B.SC :- Hemchandracharya North <br />
                Gujarat University,Patan </h3>
             
              <ul>
                <li>Completed B.sc with 72%</li>
                <li>awarded First class with Distinction.</li>
              </ul>
            </div>
          </div>

           <div className="timeline-item">
            <div className="timeline-date">March 2018</div>
            <div className="timeline-content">
              <h3> Smt C G Mevada Higher Secondary School Palanpur-12th Science  </h3>
             
              <ul>
                <li>Completed with 60% focused on Chemistry,Physics,Maths</li>
                
              </ul>
            </div>
          </div>
          {/* Add more timeline-items here */}
        </div>
      </div>
    </section>
  );
};

export default Experience;