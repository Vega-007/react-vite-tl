import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 T.L. Aluminium Fabrication. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/t-l-aluminium-fabrication/" className="linkedin-link" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;