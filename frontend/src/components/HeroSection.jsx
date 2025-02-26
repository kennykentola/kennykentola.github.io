import React, { useEffect, useState } from "react";
import "../components/HeroSection.css";
import resumePDF from "../assets/resume.pdf";

const fullIntro = "I'm Ademola Peter kehinde, known as KennyKentola";
const roles = ["web developer", "Passionate About Coding", "Software Developer", "UI/UX Designer", "Graphic Designer"];

const HeroSection = () => {
  const [typedText, setTypedText] = useState("Welcome to ");
  const fullText = "  My Portfolio, I'm   ";
  const [displayRole, setDisplayRole] = useState(roles[0]);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile Menu State

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

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
          <span>KENNYKENTOLA</span>
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
