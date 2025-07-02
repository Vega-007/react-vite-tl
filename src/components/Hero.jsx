import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";
import bg from "../assets/bg.jpeg";  // ✅ Import Image

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}  // ✅ Apply Background Image Inline
    >
      <div className="container">
        <div className="hero-content">
          <h2>Welcome to T.L. Aluminium Fabrication</h2>
          <p>We are a trusted name in delivering high-quality architectural and aluminium fabrication solutions.</p>
          <Link to="/contact" className="btn">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
