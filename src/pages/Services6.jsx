import React from "react";
import Slider from "react-slick";
import "../styles/Services1.css";  // Ensure this is the same Services1.css file
import { FaBuilding, FaRegLightbulb, FaDraftingCompass } from "react-icons/fa"; // Adding icons
import Services6Img1 from "../assets/services6.jpeg";  // First image for slideshow
import Services6Img2 from "../assets/services6.jpeg";  // Second image for slideshow

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services6Page = () => {
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
        <div className="service-content">
          <h2 className="section-heading">
            Front Elevation Work
            <span className="underline"></span>
          </h2>

          <div className="info-point">
            <FaBuilding className="icon" />
            <p>
              Our front elevation services ensure that your building makes a stunning first
              impression. We design with modern architecture principles for both form and function.
            </p>
          </div>

          <div className="info-point">
            <FaRegLightbulb className="icon" />
            <p>
              Whether it's 3D elevation, stone cladding, or glass elements, our team blends
              creativity with structural integrity to enhance your property's look and value.
            </p>
          </div>

          <div className="info-point">
            <FaDraftingCompass className="icon" />
            <p>
              We combine innovation with precision, ensuring that each design is not only visually
              appealing but also structurally sound and aligned with your vision.
            </p>
          </div>
        </div>

        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services6Img1} alt="Front Elevation 1" className="slider-image" />
            </div>
            <div>
              <img src={Services6Img2} alt="Front Elevation 2" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services6Page;
