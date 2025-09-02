import React from "react";
import "../styles/contactcom.css";

const Contact = () => {
  return (
    <section id="contact" className="contactcom-section">
      <div className="contactcom-container">
        <h2 className="contactcom-heading">Contact Us</h2>

        <div className="contactcom-horizontal-card">
          <div className="contactcom-box">
            <div className="contactcom-icon phone" />
            <div>
              <h3>Phone</h3>
              <p>+91-94453 78403<br />+91-70105 02388</p>
            </div>
          </div>

          <div className="contactcom-box">
            <div className="contactcom-icon email" />
            <div>
              <h3>Email</h3>
              <p>tialufab@gmail.com</p>
            </div>
          </div>

          <div className="contactcom-box">
            <div className="contactcom-icon location" />
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