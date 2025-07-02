import React from "react";
import "../styles/Projects.css";

// Import images
import project1Img from "../assets/project4.jpeg";
import project2Img from "../assets/project3.jpeg";

const projects = [
  {
    img: project1Img,
    title: "Eaton Power Quality Pvt. Ltd., Pondicherry (2024)",
    desc: "A sleek industrial façade blending perforated metal panels to balance airflow, daylight, and energy efficiency."
  },
  {
    img: project2Img,
    title: "Sri Kanchi Kamakoti Sankara Vidyalaya, Podili, AP (2024)",
    desc: "A contemporary educational block featuring parametric façade elements—shading, ventilation, and aesthetic flow."
  }
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2 className="section-heading">Our Best Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-item" key={i}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
