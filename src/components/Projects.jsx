import React from "react";
import "../styles/index.css";

const projects = [
  { img: "/project1.jpg", title: "Eaton Power Quality Pvt. Ltd., Pondicherry (2024)" },
  { img: "/project2.jpg", title: "Sri Kanchi Kamakoti Sankara Vidyalaya, Podili, AP (2024)" },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Our Best Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
