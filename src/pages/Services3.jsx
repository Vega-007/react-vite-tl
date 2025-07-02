import React from "react";
import Slider from "react-slick";
import "../styles/Services1.css";
import { FaHammer, FaTools } from "react-icons/fa";
import Services3Img1 from "../assets/services3.jpeg";
import Services3Img2 from "../assets/services3.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services3Page = () => {
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
            Aluminium Louvers
            <span className="underline"></span>
          </h2>

          <div className="info-point">
            <FaHammer className="icon" />
            <p>
              We offer high-quality aluminium louvers that combine functionality with style. They provide effective ventilation, protection from direct sunlight, and enhance building aesthetics.
            </p>
          </div>

          <div className="info-point">
            <FaTools className="icon" />
            <p>
              Our louvers are customizable to your needs — fixed or adjustable, with varying blade sizes, and powder-coated finishes to match your design requirements.
            </p>
          </div>

          <p className="extra-note">
            A modern solution for building aesthetics and efficient ventilation.
          </p>
        </div>

        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services3Img1} alt="Louvers Installation 1" className="slider-image" />
            </div>
            <div>
              <img src={Services3Img2} alt="Louvers Installation 2" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services3Page;
