import React from "react";
import Slider from "react-slick";
import { FaWindowRestore, FaRegSun, FaDraftingCompass } from "react-icons/fa";
import "../styles/Services2.css";

import Services2Img1 from "../assets/services2.jpeg";
import Services2Img2 from "../assets/services2.jpeg"; // optional

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
    <section className="service-details-window2">
      <div className="container service-layout2">
        <div className="service-content2">
          <h2 className="section-heading2">
            Aluminium Windows and Ventilators
            <span className="underline2"></span>
          </h2>

          <div className="info-point2">
            <FaWindowRestore className="icon2" />
            <p>
              Designed to allow optimal light and air flow, our aluminium windows suit residential and commercial projects with elegance and practicality.
            </p>
          </div>

          <div className="info-point2">
            <FaRegSun className="icon2" />
            <p>
              Crafted from rust-free, corrosion-resistant aluminium, they’re easy to maintain and ensure lasting performance across all climates.
            </p>
          </div>

          <div className="info-point2">
            <FaDraftingCompass className="icon2" />
            <p>
              Customizable options include sliding, casement, top-hung, and louvre windows in various finishes and frame colors.
            </p>
          </div>

          <p className="extra-note2">
            A modern solution for those who prioritize natural ventilation, thermal insulation, and sleek architectural aesthetics.
          </p>
        </div>

        <div className="service-slider-wrapper2">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services2Img1} alt="Window Work 1" className="slider-image2" />
            </div>
            <div>
              <img src={Services2Img2} alt="Window Work 2" className="slider-image2" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services2Page;
