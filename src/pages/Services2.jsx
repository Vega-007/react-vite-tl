import React from "react";
import Slider from "react-slick";
import { FaWindowRestore, FaRegSun, FaDraftingCompass } from "react-icons/fa";
import "../styles/Services1.css";

import Services2Img1 from "../assets/services2.jpeg";
import Services2Img2 from "../assets/services2.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services2Page = () => {
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
            Aluminium Windows and Ventilators
            <span className="underline"></span>
          </h2>

          <div className="info-point">
            <FaWindowRestore className="icon" />
            <p>
              Designed to allow optimal light and air flow, our aluminium windows suit residential and commercial projects with elegance and practicality.
            </p>
          </div>

          <div className="info-point">
            <FaRegSun className="icon" />
            <p>
              Crafted from rust-free, corrosion-resistant aluminium, they’re easy to maintain and ensure lasting performance across all climates.
            </p>
          </div>

          <div className="info-point">
            <FaDraftingCompass className="icon" />
            <p>
              Customizable options include sliding, casement, top-hung, and louvre windows in various finishes and frame colors.
            </p>
          </div>
        </div>

        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services2Img1} alt="Window Work 1" className="slider-image" />
            </div>
            <div>
              <img src={Services2Img2} alt="Window Work 2" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
      
    </section>
  );
};

export default Services2Page;
