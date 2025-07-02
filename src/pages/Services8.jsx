import React from "react";
import Slider from "react-slick";
import "../styles/Services1.css"; // Same CSS file
import { FaGlassMartiniAlt, FaShieldAlt, FaCameraRetro } from "react-icons/fa"; // Icons for services
import Services8Img1 from "../assets/services8.jpeg"; // Image 1 for slideshow
import Services8Img2 from "../assets/services8.jpeg"; // Image 2 for slideshow

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services8Page = () => {
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
            Spider Glass Installation
            <span className="underline"></span> {/* Blue line under the heading */}
          </h2>
          <div className="info-point">
            <FaGlassMartiniAlt className="icon" />
            <p>
              Our spider glass installation services offer sleek, frameless glass facades for a modern
              architectural look. We ensure safety, transparency, and high-end finishing.
            </p>
          </div>
          <div className="info-point">
            <FaShieldAlt className="icon" />
            <p>
              Using premium-grade materials and hardware, our spider systems provide unmatched strength
              and flexibility while maintaining aesthetic transparency.
            </p>
          </div>
          <div className="info-point">
            <FaCameraRetro className="icon" />
            <p>
              We provide high-quality glass that can be customized for various architectural designs,
              offering both strength and beauty.
            </p>
          </div>
        </div>

        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services8Img1} alt="Spider Glass 1" className="slider-image" />
            </div>
            <div>
              <img src={Services8Img2} alt="Spider Glass 2" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services8Page;
