import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages.css";
import Services1 from "../assets/services1.jpeg";
import Services2 from "../assets/services2.jpeg";
import Services3 from "../assets/services3.jpeg";
import Services4 from "../assets/services4.jpeg";
import Services5 from "../assets/services5.jpeg";
import Services6 from "../assets/services6.jpeg";
import Services7 from "../assets/services7.jpeg";
import Services8 from "../assets/services8.jpeg";
import Services9 from "../assets/services9.jpeg";

const Services = () => {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    { image: Services1, title: "Aluminium Composite Panel (ACP) and Facade Work", description: "Expert ACP and façade solutions with modern aesthetics and durability.", path: "/services1" },
    { image: Services2, title: "Aluminium Windows and Ventilators", description: "Precision-crafted windows and ventilators for optimal airflow and design.", path: "/services2" },
    { image: Services3, title: "Louvers", description: "Functional and decorative louvers for enhanced building performance.", path: "/services3" },
    { image: Services4, title: "False Ceiling Installation", description: "Stylish and sturdy false ceilings tailored to commercial and residential spaces.", path: "/services4" },
    { image: Services5, title: "Aluminium Partition Work", description: "Custom partition solutions with lightweight, sleek aluminum designs.", path: "/services5" },
    { image: Services6, title: "Front Elevation Work", description: "Modern front elevation designs that add charm and value to your space.", path: "/services6" },
    { image: Services7, title: "Inner MS Framework", description: "Strong MS frameworks for structural integrity and lasting support.", path: "/services7" },
    { image: Services8, title: "Spider Glass Installation", description: "Premium spider glass installations for a clean, frameless finish.", path: "/services8" },
    { image: Services9, title: "UPVC Windows & Doors", description: "Energy-efficient and stylish UPVC window and door solutions.", path: "/services9" }
  ];

  const cardWidth = 360; // width + margin
  const visibleCards = 3;

  // Retrieve saved service index from localStorage when component mounts
  useEffect(() => {
    const savedIndex = localStorage.getItem("currentServiceIndex");
    if (savedIndex) {
      setCurrentService(parseInt(savedIndex, 10));
    }
  }, []);

  const nextService = () => {
    if (currentService < services.length - visibleCards) {
      setCurrentService(currentService + 1);
    }
  };

  const prevService = () => {
    if (currentService > 0) {
      setCurrentService(currentService - 1);
    }
  };

  const handleServiceClick = (index) => {
    // Save the current service index in localStorage
    localStorage.setItem("currentServiceIndex", index);
  };

  return (
    <section className="services">
      <h2 className="section-heading">Our Services</h2>

      <div className="horizontal-slider">
        {/* Left button */}
        <button className="slider-btn prev" onClick={prevService}>
          &#10094;
        </button>
        {/* The wrapper for the slider */}
        <div className="service-strip-wrapper">
          <div
            className="service-strip"
            style={{ transform: `translateX(-${currentService * cardWidth}px)` }}
          >
            {/* Loop through each service */}
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className="service-slide-link"
                onClick={() => handleServiceClick(index)} // Save the index on click
              >
                <div className="service-slide">
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Right button */}
        <button className="slider-btn next" onClick={nextService}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Services;
