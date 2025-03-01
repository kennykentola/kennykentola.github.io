import React, { useState, useEffect } from "react";
import "../components/projects.css"; // Ensure correct path
import { useNavigate } from "react-router-dom"; // Import for navigation
import aponmodeLMS from "../assets/aponmode-lms.png";
import eCommerce from "../assets/ecom.png";
import portfolio from "../assets/portfolio.png";
import reparCompteur from "../assets/carrepaire.png";
import ui75Conference from "../assets/ui75-conference.png";
import brand from "../assets/branding-5.jpg";
import graphicDesigns from "../assets/graphic-designs.jpg"; // Ensure you add an image for the section

const projects = [
  { title: "Aponmode LMS", description: "A website for Aponmode Grammar School.", image: aponmodeLMS },
  { title: "E-Commerce Platform", description: "Fully functional e-commerce platform.", image: eCommerce },
  { title: "Responsive Portfolio", description: "A sleek, mobile-friendly portfolio.", image: portfolio },
  { title: "Repair car", description: "Website for a vintage car repair service.", image: reparCompteur },
  { title: "UI @75 CONFERENCE", description: "Website for UI @75 conference.", image: ui75Conference },
  { title: "Brand Identity", description: "Complete brand identity for a startup.", image: brand },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="projects">
      <h2>My Latest <span>Projects</span></h2>

      <div className="slideshow">
        {/* Left Arrow */}
        <button className="prev-btn" onClick={prevSlide}>❮</button>

        {/* Slide Content */}
        <div className="slide">
          <img src={projects[index].image} alt={projects[index].title} className="project-image" />
          <h3>{projects[index].title}</h3>
          <p>{projects[index].description}</p>
        </div>

        {/* Right Arrow */}
        <button className="next-btn" onClick={nextSlide}>❯</button>
      </div>

      {/* Dots Indicator */}
      <div className="dots">
        {projects.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)}></span>
        ))}
      </div>

      {/* New Section: My Graphic Designs */}
      <section className="graphic-designs">
        <h2>My <span>Graphic Designs</span></h2>
        <div className="graphic-container">
          <img src={graphicDesigns} alt="Graphic Design Portfolio" className="graphic-image" />
          <button className="view-designs-btn" onClick={() => navigate("/graphic-designs")}>
            View My Designs
          </button>
        </div>
      </section>
    </section>
  );
};

export default Projects;
