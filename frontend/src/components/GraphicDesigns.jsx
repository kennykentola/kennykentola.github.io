import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/graphic.css";
import "../components/HeroSection.css";

// ✅ Import images
import designerHand from "../assets/designer-hand.png";

// 🔹 Social Media Flyers
import social1 from "../assets/fatima.jpg";
import social2 from "../assets/social-2.png";
import social3 from "../assets/joseph.png";
import social4 from "../assets/zainab.png";
import social5 from "../assets/mathew.png";
import social6 from "../assets/taiwo.png";
import social7 from "../assets/janny.png";
import social8 from "../assets/fatima1.png";
import social9 from "../assets/sam.png";

// 🔹 Logos
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/kenn.png";
import logo4 from "../assets/logo-4.png";

// 🔹 Branding Identity
import brand1 from "../assets/branding1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";

const GraphicDesigns = () => {
  const navigate = useNavigate();
  
  // 🔥 State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Toggle function
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="portfolio-container">
      {/* 🔹 Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>KENKENTOLA</span>
        </div>

        {/* 🔥 Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* 🔥 Navigation Links (Show only if menuOpen is true in mobile) */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/" onClick={() => navigate("/")}>Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="hero-graphic">
        <h1 className="title">My <span>Design Portfolio</span></h1>
      </section>

      {/* 🔹 Social Media Flyers Section */}
      <section className="section gradient-bg">
        <div className="background-image">
          <img src={designerHand} alt="Designer Hand" className="graphic-image" />
        </div>
        <div className="content-overlay">
          <h2>Flyers</h2>
          <div className="design-grid">
            <img src={social1} alt="Social 1" className="graphic-image" />
            <img src={social2} alt="Social 2" className="graphic-image" />
            <img src={social3} alt="Social 3" className="graphic-image" />
            <img src={social4} alt="Social 4" className="graphic-image" />
            <img src={social5} alt="Social 5" className="graphic-image" />
            <img src={social6} alt="Social 6" className="graphic-image" />
            <img src={social7} alt="Social 7" className="graphic-image" />
            <img src={social8} alt="Social 8" className="graphic-image" />
            <img src={social9} alt="Social 9" className="graphic-image" />
          </div>
        </div>
      </section>

            {/* 🔹 Logo Design Section */}
            <section className="section gradient-bg">
        <div className="content-overlay">
          <h2>Logo Design</h2>
          <div className="design-grid">
            <img src={logo1} alt="Logo 1" className="graphic-image" />
            <img src={logo2} alt="Logo 2" className="graphic-image" />
            <img src={logo3} alt="Logo 3" className="graphic-image" />
            <img src={logo4} alt="Logo 4" className="graphic-image" />
          </div>
        </div>
      </section>

      {/* 🔹 Brand Identity Design Section */}
      <section className="section gradient-bg">
        <div className="content-overlay">
          <h2>Brand Identity Design</h2>
          <div className="design-grid">
            <img src={brand1} alt="Brand 1" className="graphic-image" />
            <img src={brand2} alt="Brand 2" className="graphic-image" />
            <img src={brand3} alt="Brand 3" className="graphic-image" />
            <img src={brand4} alt="Brand 4" className="graphic-image" />
          </div>
        </div>
      </section>


      {/* 🔹 Why Choose Me Section */}
      <section className="section gradient-bg">
        <div className="content-overlay text-center">
          <h2 className="title">Why Choose Me?</h2>
          <div className="why-choose-me-box">
            <p><strong>Creative & Unique Designs:</strong> Craft original and eye-catching visuals tailored to your brand.</p>
            <p><strong>Attention to Detail:</strong> Every design is carefully thought out to ensure quality and impact.</p>
            <p><strong>Fast & Reliable Service:</strong> I meet deadlines without compromising on creativity.</p>
            <p><strong>Client-Focused Approach:</strong> Your vision and satisfaction are my top priorities.</p>
            <p><strong>Up-to-Date with Trends:</strong> I stay current with design trends to keep your brand fresh and modern.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesigns;
