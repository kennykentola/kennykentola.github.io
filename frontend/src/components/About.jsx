import React from "react";
import profileImage from "../assets/profile2.png"; // Ensure the correct path
import "../components/About.css"; // Import your styles

const About = () => {
  // Function to confirm and make a call
  const handleCall = () => {
    const confirmCall = window.confirm("Do you want to call KennyKentola?");
    if (confirmCall) {
      window.location.href = "tel:+2348163571677"; // Replace with your actual phone number
    }
  };

  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* Profile Image */}
        <img src={profileImage} alt="Profile" className="profile-image" />

        {/* About Text */}
        <div className="about-content">
          <p>
          Hi, I'm Kennykentola! 👋 I'm a passionate Full-Stack Developer specializing in 
            <strong> React, Node.js, and Python</strong>. I love building 
            scalable applications with efficient front-end and back-end architecture.
            I thrive on solving complex problems with innovative solutions
          </p>
          <p>
            I'm also passionate about <strong >photography, design, and modern art </strong>. 
            When I'm not coding, you'll find me exploring creative pursuits.
          </p>
          <p><strong>Interests:</strong> Photography, Movies & Science Fiction</p>

          {/* Clickable Phone Number */}
          <p>
            <strong>Phone:</strong> 
            <button onClick={handleCall} className="call-button">
              dial my number for more enquires
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
