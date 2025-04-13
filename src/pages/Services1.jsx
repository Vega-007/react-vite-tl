import React from "react";
import Slider from "react-slick";
import { FaHammer, FaTools, FaBuilding } from "react-icons/fa";
import "../styles/Services1.css";

import Services1Img1 from "../assets/services1.jpeg";
import Services1Img2 from "../assets/services0.jpeg"; // optional second image

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services1Page = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="service-details-acp">
      <div className="container service-layout">
        <div className="service-content">
          <h2 className="section-heading">
            Aluminium Composite Panel (ACP) & Facade Work
            <span className="underline"></span>
          </h2>

          <div className="info-point">
            <FaHammer className="icon" />
            <p>
              We offer modern ACP cladding and facade solutions tailored for both residential and commercial architecture. Our designs elevate your exterior look with a premium, weatherproof finish.
            </p>
          </div>

          <div className="info-point">
            <FaTools className="icon" />
            <p>
              Our skilled professionals use cutting-edge tools and techniques to ensure seamless installation, structural integrity, and long-term durability of every panel we fix.
            </p>
          </div>

          <div className="info-point">
            <FaBuilding className="icon" />
            <p>
              Whether it’s a towering office complex or a boutique retail outlet, our ACP work transforms structures into modern landmarks with thermal and sound insulation benefits.
            </p>
          </div>

          <p className="extra-note">
            All installations are executed with safety compliance and industry certifications in mind, ensuring performance and peace of mind for years to come.
          </p>
        </div>

        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services1Img1} alt="ACP Work 1" className="slider-image" />
            </div>
            <div>
              <img src={Services1Img2} alt="ACP Work 2" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services1Page;
