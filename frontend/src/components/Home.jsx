

import React from "react";//
import HeroSection from "./HeroSection";//
import About from "./About";//
import Skills from "./Skills";//
import Projects from "./Projects";//
import EducationExperience from "./EducationExperience";//
import Testimonials from "./Testimonials";//
import Contact from "./Contact";//
import { Helmet } from "react-helmet-async";//

function Home() {
  return (
    <div className="home-container">
      <Helmet>
        <title>KennyKentola Portfolio</title>
        <meta property="og:title" content="KennyKentola Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website!" />
        <meta property="og:image" content="https://kennykentola.vercel.app/assets/port.png" />
        <meta property="og:url" content="https://kennykentola.vercel.app" />
        <meta name="twitter:card" content="portfolio image" />
      </Helmet>

      {/* Page Content */}
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <EducationExperience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
