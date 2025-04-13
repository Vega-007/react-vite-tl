import React, { useState } from "react";
import "../styles/index.css"; // ✅ Use your own CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredContact: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const scriptURL = "https://script.google.com/macros/s/AKfycbwMj8gD40FZIMC1GQrTcm559FHMZUaWgD7dTWghjt8QyjV6G6Q_U9cUi4mC1ZSVoo07/exec"

    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(key, formData[key]);
    });

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });

      const resultText = await response.text();
      if (resultText.includes("Success")) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          preferredContact: "",
        });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company / Business Name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="service"
            placeholder="Service You're Interested In"
            value={formData.service}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <select
            name="preferredContact"
            required
            value={formData.preferredContact}
            onChange={handleChange}
          >
            <option value="">-- Preferred Contact Method --</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Call Back">Call Back</option>
            <option value="Email">Email</option>
          </select>

          <button type="submit" className="btn">
            Send Enquiry
          </button>
          <p className="status-msg">{status}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
