import React from "react";
import Slider from "react-slick";
import "../styles/Services1.css";  // Use the same CSS for this page
import { FaWindowMaximize, FaShieldAlt, FaCheckCircle } from "react-icons/fa"; // Icons for services
import Services9Img1 from "../assets/services9.jpeg";  // Image 1 for slideshow
import Services9Img2 from "../assets/services9.2.jpeg";  // Image 2 for slideshow
import Services9Img3 from "../assets/services9.1.jpeg";  // Image 3 for slideshow

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services9Page = () => {
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
            UPVC Windows & Doors
            <span className="underline"></span> {/* Blue line under the heading */}
          </h2>
          <div className="info-point">
            <FaWindowMaximize className="icon" />
            <p>
              Our UPVC windows and doors are energy-efficient, weatherproof, and low maintenance.
              They enhance thermal insulation and soundproofing in modern homes and offices.
            </p>
          </div>
          <div className="info-point">
            <FaShieldAlt className="icon" />
            <p>
              Available in various designs — sliding, casement, tilt & turn — we offer complete
              installation with quality assurance and long-lasting performance.
            </p>
          </div>
          <div className="info-point">
            <FaCheckCircle className="icon" />
            <p>
              With excellent durability and a modern aesthetic, our UPVC solutions are a great
              addition to any space.
            </p>
          </div>
        </div>

        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services9Img1} alt="UPVC Window 1" className="slider-image" />
            </div>
            <div>
              <img src={Services9Img2} alt="UPVC Window 2" className="slider-image" />
            </div>
            <div>
              <img src={Services9Img3} alt="UPVC Window 3" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services9Page;
