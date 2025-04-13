import React from "react";
import Slider from "react-slick";
import "../styles/Services4.css";
import { FaPaintRoller, FaLightbulb, FaWarehouse } from "react-icons/fa";
import Services4Img1 from "../assets/services4.jpeg";
import Services4Img2 from "../assets/services4.jpeg"; // Replace with a different one if needed

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services4Page = () => {
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
    <section className="service-details4">
      <div className="container service-layout4">
        <div className="service-content4">
          <h2 className="section-heading4">False Ceiling Installation</h2>
          <div className="underline4"></div>

          <div className="info-point4">
            <FaPaintRoller className="icon4" />
            <p>
              Our false ceiling services transform interiors with modern designs and functional
              solutions. We offer gypsum, grid, and POP ceilings suited for homes, offices, and malls.
            </p>
          </div>

          <div className="info-point4">
            <FaLightbulb className="icon4" />
            <p>
              Designed for elegance and sound insulation, our false ceilings conceal wiring and ducting
              while enhancing lighting and ambiance.
            </p>
          </div>

          <div className="info-point4">
            <FaWarehouse className="icon4" />
            <p>
              Perfect for commercial spaces and modern homes — aesthetic, durable, and easy to maintain.
            </p>
          </div>

          <div className="extra-note4">
            * Installation services come with free consultation for the best design options.
          </div>
        </div>

        <div className="service-slider-wrapper4">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services4Img1} alt="False Ceiling 1" className="slider-image4" />
            </div>
            <div>
              <img src={Services4Img2} alt="False Ceiling 2" className="slider-image4" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services4Page;
