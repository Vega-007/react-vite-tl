import React from "react";
import "../styles/about.css";
import work from "../assets/work2.avif";
import { FaUsers, FaBuilding, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-title">About T.L. Aluminium Fabrication</h2>
          <div className="title-decoration"></div>
        </div>

        {/* About Grid Content */}
        <div className="about-grid">
          <div className="about-content">
            <p className="about-description justified-text">
              With over <strong>30 years of excellence</strong>, T.L. Aluminium Fabrication has built a solid reputation in the field of architectural aluminium fabrication. Officially established in 2013 and headquartered in <strong>Paraniputhur, Chennai</strong>, we proudly serve clients across Tamil Nadu, including Chennai, as well as Andhra Pradesh, Pondicherry, Goa, Rajasthan, Bangalore, and Hosur.
            </p>

            {/* Services List */}
            <div className="about-services">
              <h3>Our Specializations</h3>
              <ul className="services-list">
                <li>Aluminium Composite Panel (ACP) and Facade Work</li>
                <li>Aluminium Windows and Ventilators</li>
                <li>Louvers</li>
                <li>False Ceiling Installation</li>
                <li>Aluminium Partition Work</li>
                <li>Front Elevation Work</li>
                <li>Inner MS Framework</li>
                <li>Spider Glass Installation</li>
                <li>UPVC Windows & Doors</li>
              </ul>
            </div>

            {/* Company Mission */}
            <div className="about-mission">
              <h3>Our Commitment</h3>
              <p className="justified-text">
                Our dedication to <strong>precision, durability, and modern fabrication techniques</strong> ensures high-quality workmanship and customer satisfaction. Our expert team leverages innovative solutions to provide <strong>cost-effective, reliable, and aesthetically superior</strong> structures for residential, commercial, and industrial projects.
              </p>
            </div>
          </div>

          {/* Image Block */}
          <div className="about-image-container">
            <img src={work} alt="T.L. Aluminium team at work" className="about-image" />
          </div>
        </div>

        {/* Highlights Section */}
        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon"><FaUsers /></div>
            <h3>Our Team</h3>
            <p>Highly skilled professionals dedicated to innovation, precision, and quality.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon"><FaBuilding /></div>
            <h3>Our Infrastructure</h3>
            <p>State-of-the-art fabrication facilities ensuring top-notch production quality.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon"><FaHandshake /></div>
            <h3>Customer Satisfaction</h3>
            <p>Client-centric approach, delivering long-lasting and visually appealing structures.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
