import React from "react";
import Slider from "react-slick";
import "../styles/Services1.css"; // Same CSS file
import { FaHammer, FaShieldAlt, FaTools } from "react-icons/fa"; // Icons for services
import Services7Img1 from "../assets/services7.jpeg"; // Image 1 for slideshow
import Services7Img2 from "../assets/services7.jpeg"; // Image 2 for slideshow

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services7Page = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="service-details-acp">
      <div className="container service-layout">
        {/* Service Content */}
        <div className="service-content">
          <h2 className="section-heading">
            Inner MS Framework
            <span className="underline"></span> {/* Blue line under the heading */}
          </h2>

          {/* Info Points */}
          <div className="info-point">
            <FaHammer className="icon" />
            <p>
              Our Inner Mild Steel (MS) framework solutions offer structural support to facades,
              ceilings, and ACP installations. Built for strength and precision.
            </p>
          </div>

          <div className="info-point">
            <FaShieldAlt className="icon" />
            <p>
              We fabricate and install according to architectural blueprints using corrosion-resistant
              materials, ensuring long-term reliability and safety.
            </p>
          </div>

          <div className="info-point">
            <FaTools className="icon" />
            <p>
              Our frameworks provide robust and precise structural integrity, ideal for large-scale
              installations, ensuring both safety and durability.
            </p>
          </div>
        </div>

        {/* Slider Section */}
        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services7Img1} alt="MS Framework 1" className="slider-image" />
            </div>
            <div>
              <img src={Services7Img2} alt="MS Framework 2" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services7Page;
