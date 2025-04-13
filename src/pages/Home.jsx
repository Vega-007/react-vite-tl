import React from "react";
import Hero from "../components/Hero";
import About from "../components/Whoweare";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import "../styles/index.css";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
