import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Headert";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Services1Page from "./pages/Services1";
import Services2Page from "./pages/Services2";
import Services3Page from "./pages/Services3";
import Services4Page from "./pages/Services4";
import Services5Page from "./pages/Services5";
import Services6Page from "./pages/Services6";
import Services7Page from "./pages/Services7";
import Services8Page from "./pages/Services8";
import Services9Page from "./pages/Services9";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <div className="page-container">
        <Header />

        {/* Main content that stretches */}
        <div className="content-wrap">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Static Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services1" element={<Services1Page />} />
            <Route path="/services2" element={<Services2Page />} />
            <Route path="/services3" element={<Services3Page />} />
            <Route path="/services4" element={<Services4Page />} />
            <Route path="/services5" element={<Services5Page />} />
            <Route path="/services6" element={<Services6Page />} />
            <Route path="/services7" element={<Services7Page />} />
            <Route path="/services8" element={<Services8Page />} />
            <Route path="/services9" element={<Services9Page />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
