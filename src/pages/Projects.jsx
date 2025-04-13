import React from "react";
import "../styles/pages.css";

const Projects = () => {
  const projects = [
    { image: "/assets/project1.jpg", title: "High-Rise Office Facade", description: "Completed aluminum facade installation for a major corporate building." },
    { image: "/assets/project2.jpg", title: "Shopping Mall Windows", description: "Fabrication and installation of energy-efficient aluminum windows." },
    { image: "/assets/project3.jpg", title: "Ashai Glass India", description: "Collaborated on advanced glass installations for commercial buildings." },
    { image: "/assets/project4.jpg", title: "Fenner India, Chennai", description: "Executed facade and window installations for industrial structures." },
    { image: "/assets/project5.jpg", title: "EMPEE Sugars, Chennai", description: "Custom aluminum partition work for industrial office spaces." },
    { image: "/assets/project6.jpg", title: "Fennar India, Madurai", description: "Energy-efficient UPVC windows and door solutions for the manufacturing plant." },
    { image: "/assets/project7.jpg", title: "Fennar India, Chennai", description: "Modern facade design and installation for the main office." },
    { image: "/assets/project8.jpg", title: "Essan India Pvt Ltd, Pondicherry", description: "Structural aluminum work and partition installations for corporate headquarters." },
    { image: "/assets/project9.jpg", title: "MRF Tyres, Chennai", description: "Advanced facade and ventilation system installation for the factory." },
    { image: "/assets/project10.jpg", title: "Raziam Exports, Chennai", description: "Custom aluminum doors and partitions for commercial exports." },
    { image: "/assets/project11.jpg", title: "K.H. Shoes, Ranipet", description: "Facades and aluminum windows for the retail establishment." },
    { image: "/assets/project12.jpg", title: "Dr. Cherian Hospital, Tada", description: "Architectural aluminum framing and window installations for medical premises." },
    { image: "/assets/project13.jpg", title: "Raadha Rajendran Hospital, Chennai", description: "Facade installation and aluminum framing for a state-of-the-art hospital." },
    { image: "/assets/project14.jpg", title: "MMM Hospital, Chennai", description: "Advanced aluminum facade installation for medical and healthcare facilities." },
    { image: "/assets/project15.jpg", title: "Electronic Company, Chennai", description: "Aluminum frame installation for an electronic company manufacturing plant." },
    { image: "/assets/project16.jpg", title: "Archid Medicine, Chennai", description: "Energy-efficient windows and partition installations for the pharma company." },
    { image: "/assets/project17.jpg", title: "Puthiya Thalaimurai TV Channel Office, Chennai", description: "Modern office facades and aluminum window installations for a media channel." }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>Our Latest Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
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
