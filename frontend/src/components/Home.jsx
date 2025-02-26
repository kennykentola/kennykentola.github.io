

 import React from "react";
import "./Home.css";
import Contact from "./Contact";
import Skills from "./Skills";
import EducationExperience from "./EducationExperience";
import About from "./About";  
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Testimonials from "./Testimonials";


function Home() {
  return (
    <div className="home-container">
      {/* Navigation */}
     
      
    <HeroSection/>
    <About/>
    <Skills/>
    <Projects/>
    <EducationExperience/>
    <Testimonials/>
    <Contact />
       {/* <Footer />  */}
    </div>
  );
} 

export default Home;
