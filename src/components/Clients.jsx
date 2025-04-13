import React from "react";
import "../styles/index.css";

// Import client images from the src folder
import Client1 from "../assets/clients.jpg";
import Client2 from "../assets/clients.jpg";
import Client3 from "../assets/clients.jpg";
import Client4 from "../assets/clients.jpg";
import Client5 from "../assets/clients.jpg";
import Client6 from "../assets/clients.jpg";

const Clients = () => {
  // Array of client logos
  const clients = [Client1, Client2, Client3, Client4, Client5, Client6];

  return (
    <section className="clients">
      <h2 className="section-title">Our Clients</h2>
      <div className="clients-slider">
        <div className="clients-track">
          {clients.concat(clients).map((logo, index) => (
            <img key={index} src={logo} alt="Client Logo" className="client-logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
