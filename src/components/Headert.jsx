import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and passed 100px -> hide header
        setShowHeader(false);
      } else {
        // Scrolling up -> show header
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${showHeader ? "header-show" : "header-hide"}`}>
      <div className="header-container">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="brand-name">T.L. Aluminium Fabrication</h1>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <Link onClick={closeMenu} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/about">About Us</Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/services">Services</Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/projects">Projects</Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
