import React, { useState } from "react";

// Import all your images
import project1 from "../assets/bg.jpeg";
import project2 from "../assets/services0.jpeg";
import project3 from "../assets/services3.jpeg";
import project4 from "../assets/services4.jpeg";
import project5 from "../assets/services5.jpeg";
import project6 from "../assets/services6.jpeg";
import project7 from "../assets/services7.jpeg";
import project8 from "../assets/services8.jpeg";
import project9 from "../assets/services9.jpeg";
import project10 from "../assets/services1.jpeg";
import project11 from "../assets/services2.jpeg";

import "../styles/gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
    project11,
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="gallery">
      <h2 className="gallery-title">Our Projects Gallery</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index} onClick={() => openModal(image)}>
            <img src={image} alt={`Project ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full project view" className="modal-image" />
            <span className="close-btn" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
