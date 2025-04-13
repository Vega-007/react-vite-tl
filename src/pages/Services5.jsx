import React from "react";
import Slider from "react-slick";
import "../styles/Services5.css";  // Make sure to use a separate CSS file for this page.
import { FaTools, FaWarehouse, FaPaintRoller } from "react-icons/fa"; // Adding icons
import Services5Img1 from "../assets/services5.jpeg";  // First image for slideshow
import Services5Img2 from "../assets/services5.jpeg";  // Second image for slideshow

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services5Page = () => {
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
    <section className="service-details-louvers">
      <div className="container service-layout">
        <div className="service-content">
          <h2>Aluminium Partition Work</h2>
          <div className="underline"></div> {/* Blue line under the heading */}
          <div className="info-point">
            <FaTools className="icon" />
            <p>
              We provide lightweight, durable, and stylish aluminium partitions for commercial and
              office interiors. Our partitions can be customized with glass, panels, or both.
            </p>
          </div>
          <div className="info-point">
            <FaWarehouse className="icon" />
            <p>
              Perfect for creating cabins, conference areas, or dividing spaces efficiently, our
              partitions offer a balance of privacy and transparency with modern design appeal.
            </p>
          </div>
          <div className="info-point">
            <FaPaintRoller className="icon" />
            <p>
              Our aluminium partitions can be painted in a variety of colors and finishes, allowing
              you to match them to your interior design.
            </p>
          </div>
        </div>

        <div className="service-slider-wrapper">
          <Slider {...sliderSettings}>
            <div>
              <img src={Services5Img1} alt="Aluminium Partition 1" className="slider-image" />
            </div>
            <div>
              <img src={Services5Img2} alt="Aluminium Partition 2" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services5Page;
