import React from "react";
import { Link } from "react-router-dom";
import "../styles/Servicesp.css";
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
  return (
    <section className="servicesp">
      <div className="container">
        <h2 className="servicesp-heading">Our Services</h2>
        <div className="servicesp-list">
          <Link to="/services1" className="servicesp-card">
            <img src={Services1} alt="ACP Work" />
            <h3>Aluminium Composite Panel (ACP) and Facade Work</h3>
            <p>Expert ACP and façade solutions with modern aesthetics and durability.</p>
          </Link>

          <Link to="/services2" className="servicesp-card">
            <img src={Services2} alt="Aluminium Windows and Ventilators" />
            <h3>Aluminium Windows and Ventilators</h3>
            <p>Precision-crafted windows and ventilators for optimal airflow and design.</p>
          </Link>

          <Link to="/services3" className="servicesp-card">
            <img src={Services3} alt="Louvers" />
            <h3>Louvers</h3>
            <p>Functional and decorative louvers for enhanced building performance.</p>
          </Link>

          <Link to="/services4" className="servicesp-card">
            <img src={Services4} alt="False Ceiling Installation" />
            <h3>False Ceiling Installation</h3>
            <p>Stylish and sturdy false ceilings tailored to commercial and residential spaces.</p>
          </Link>

          <Link to="/services5" className="servicesp-card">
            <img src={Services5} alt="Aluminium Partition Work" />
            <h3>Aluminium Partition Work</h3>
            <p>Custom partition solutions with lightweight, sleek aluminum designs.</p>
          </Link>

          <Link to="/services6" className="servicesp-card">
            <img src={Services6} alt="Front Elevation Work" />
            <h3>Front Elevation Work</h3>
            <p>Modern front elevation designs that add charm and value to your space.</p>
          </Link>

          <Link to="/services7" className="servicesp-card">
            <img src={Services7} alt="Inner MS Framework" />
            <h3>Inner MS Framework</h3>
            <p>Strong MS frameworks for structural integrity and lasting support.</p>
          </Link>

          <Link to="/services8" className="servicesp-card">
            <img src={Services8} alt="Spider Glass Installation" />
            <h3>Spider Glass Installation</h3>
            <p>Premium spider glass installations for a clean, frameless finish.</p>
          </Link>

          <Link to="/services9" className="servicesp-card">
            <img src={Services9} alt="UPVC Windows & Doors" />
            <h3>UPVC Windows & Doors</h3>
            <p>Energy-efficient and stylish UPVC window and door solutions.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;