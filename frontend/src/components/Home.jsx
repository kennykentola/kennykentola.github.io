



 import React from "react";

import "./Home.css";
import Contact from "./Contact";
 import Skills from "./Skills";
 import EducationExperience from "./EducationExperience";

 import About from "./About";  // ✅ Correct path
// import profileImage from "../assets/profile.jpg"; 
// import laptopImage from "../assets/laptop.jpg"; 
// import logoImage from "../assets/logo.png"; 
// import resumePDF from "../assets/resume.pdf"; 
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
// import Footer from "./Footer";


function Home() {
  return (
    <div className="home-container">
      {/* Navigation */}
     
      {/* About Section */}
      <HeroSection/>
     

<About/>
  {/* Skills Section */}
  <Skills/>

    

      {/* Projects Section */}
    
     <Projects/>

      {/* Awards & Recognition */}
       {/* <section id="awards" className="awards">
       <h2>Awards & Recognition</h2>
       <p>Winner of XYZ Hackathon 2023</p>
     </section>  */}
 <EducationExperience/>
 <Testimonials/>
      {/* Contact Section */}
       <Contact />
       {/* Footer */}
       {/* <Footer />  */}
    </div>
  );
} 

export default Home;
