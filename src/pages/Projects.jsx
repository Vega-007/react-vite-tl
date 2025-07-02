import React from "react";
import "../styles/Projectsp.css";

import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "Rasik Enclave",
      description: "Aluminum and glass works for a modern residential enclave."
    },
    {
      image: project2,
      title: "Raadha Rajendran Hospital",
      description: "Facade installation and aluminum framing for a state-of-the-art hospital."
    },
    {
      image: project3,
      title: "Ana Oleo",
      description: "Energy-efficient window and partition solutions for the industrial unit."
    },
    {
      image: project4,
      title: "Eaton, Pondicherry",
      description: "Complete aluminum fabrication and installation for the corporate facility."
    },
    {
      image: project5,
      title: "Eaton Pondicherry",
      description: "Structural glazing and modern facade works for the manufacturing plant."
    },
    {
      image: project6,
      title: "Sparthan School",
      description: "Windows, doors, and facade work for an educational institution."
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-heading">Our Latest Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title || "Project Image"} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
