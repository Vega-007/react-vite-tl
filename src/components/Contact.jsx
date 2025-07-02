import React from "react";
import "../styles/contactcom.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>

        <div className="contact-horizontal-card">
          <div className="contact-box">
            <div className="contact-icon phone" />
            <div>
              <h3>Phone</h3>
              <p>+91-94453 78403<br />+91-70105 02388</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon email" />
            <div>
              <h3>Email</h3>
              <p>tialufab@gmail.com</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon location" />
            <div>
              <h3>Address</h3>
              <p>
                No. 9/113, Bajanai Koli Street,<br />
                Paranjputhur Main Road,<br />
                Chennai, Tamil Nadu - 600122
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
