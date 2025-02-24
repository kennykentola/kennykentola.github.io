import React from "react";  
import "./Skills.css"; // Import styles  

// Import Icons (Replace with your actual image paths)  
import frontendIcon from "../assets/frontend.png";  
import backendIcon from "../assets/backend.png";  
import wordpressIcon from "../assets/wordpress.png";  
import uiuxIcon from "../assets/uiux.png";  

const skillsData = [  
  {  
    id: 1,  
    icon: frontendIcon,  
    title: "Front-End Development",  
    description: "Currently, I'm doing frontend development with React, HTML",  
  },  
  {  
    id: 2,  
    icon: backendIcon,  
    title: "Back-End Development",  
    description: "Currently, I'm doing backend development with NodeJs, ExpressJs, NestJs, Python Django",  
  },  
  {  
    id: 3,  
    icon: wordpressIcon,  
    title: "WordPress Development",  
    description: "Currently, I'm doing WordPress development with any kind of theme with the newest technologies",  
  },  
  {  
    id: 4,  
    icon: uiuxIcon,  
    title: "UI/UX Designing",  
    description: "Currently, I'm designing UI/UX designs with Figma, XD, PSD, AI, etc... with modern trends",  
  },  
];  

const Skills = () => {  
  return (  
    <section id="skills" className="skills-container">  
      <h2>My Skills</h2>  
      <div className="skills-grid">  
        {skillsData.map((skill) => (  
          <div key={skill.id} className="skill-box">  
            <div className="skill-icon">  
              <img src={skill.icon} alt={skill.title} />  
            </div>  
            <div className="skill-content">  
              <h3>{skill.title}</h3>  
              <p>{skill.description}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </section>  
  );  
};  

export default Skills;