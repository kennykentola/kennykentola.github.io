import React, { useEffect, useState } from "react";
import "../components/HeroSection.css";
import resumePDF from "../assets/resume12.pdf";

const fullIntro = "My Name Is Ademola Peter Kehinde, known as KennyKentola";
const roles = ["Web Developer", "Software Developer", "UI/UX Designer", "Graphic Designer"];

const HeroSection = () => {
  const fullText = "My Portfolio, I am a ";
  const [typedText, setTypedText] = useState("Welcome to ");
  const [displayRole, setDisplayRole] = useState(roles[0]);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile Menu State

  useEffect(() => {
    let index = 0;
    let currentText = "Welcome to "; // Start with this text

    const typeEffect = () => {
      if (index < fullText.length) {
        currentText += fullText[index]; // Append next character
        setTypedText(currentText); // Update state
        index++;
        setTimeout(typeEffect, 150); // Call next letter
      }
    };

    typeEffect(); // Start typing effect

  }, []); // Run once when component mounts

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setDisplayRole((prevRole) => {
        const newIndex = (roles.indexOf(prevRole) + 1) % roles.length;
        return roles[newIndex];
      });
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span>KENKENTOLA</span>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#educationExperience" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <h1 className="hero-title">{typedText}</h1>
        <h2 className="hero-subtitle">{displayRole}</h2>
        <p className="hero-intro">{fullIntro}</p>
        <a href={resumePDF} download className="btn">Download My Resume</a>
        <div className="scroll-down">↓</div>
      </section>
    </>
  );
};

export default HeroSection;
