import React from "react";
import "../styles/Work.css";

const Work = () => {
  const projects = [
    {
      title: "Ajay's Cafe",
      desc: "Ajay's cafe is a famous revolving cafe located in Ahmedabad, Gujarat, India. It is a prominent landmark and I also host this project.",
      img: "/src/assets/myimg/ajay's.png",
      live: "https://marvelous-cajeta-598c95.netlify.app",
      code: "https://github.com/vipulchaudhary1/ayay-s-cafe "
    },
    {
      title: "Hierogly Heven",
      desc: "An eCommerce platform with secure payment and user-friendly design.",
      img: "/images/ecommerce.jpg",
      live: "https://hierogly-heven-demo.netlify.app",
      code: "https://github.com/yourusername/hierogly-heven"
    },
    {
      title: "Briggs-Bay",
      desc: "Marketing automation platform for growing businesses with AI support.",
      img: "/images/marketing.jpg",
      live: "https://briggs-bay-demo.netlify.app",
      code: "https://github.com/yourusername/briggs-bay"
    }
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title">Work</h2>
        <p className="section-subtitle">Showcasing my projects</p>
        <div className="projects">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <img src={project.img} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-links">
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="code-btn">Code</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-btn">Live</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
