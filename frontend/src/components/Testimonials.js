import React, { useState, useEffect } from "react"; // ✅ Import useState and useEffect
import "../components/Testimonials.css"; // Import the CSS file
import profileImg from "../assets/profile.jpg";
import jeffreyImg from "../assets/jeffrey-sun.jpg";
import doraImg from "../assets/dora-zhang.jpg";
import feiImg from "../assets/fei-gao.jpg";
import coolflyregImg from "../assets/coolflyreg.jpg";

const testimonialsData = [
  {
    id: 1,
    text: "kennykentola is undeniably one of the most exceptional developers...",
    name: "Femi Olubodun",
    position: "TRD UNIVERSITY OF IBADAN NIGERIA",
    assets: profileImg,
  },
  {
    id: 2,
    text: "Working with kennykentola has been an absolute pleasure...",
    name: "Jeffrey Sun",
    position: "Principal Engineering Manager, Microsoft",
    assets: jeffreyImg,
  },
  {
    id: 3,
    text: "I had the privilege of collaborating with Michael...",
    name: "Dora Zhang",
    position: "Director of Marketing, Meusam",
    assets: doraImg,
  },
  {
    id: 4,
    text: "Michael is a software wizard!",
    name: "Fei Gao",
    position: "Operation Leader, Beijing Subway",
    assets: feiImg,
  },
  {
    id: 5,
    text: "Michael transformed our vision into a reality...",
    name: "Coolflyreg",
    position: "CEO, Prodesign",
    assets: coolflyregImg,
  },
];


const Testimonials = () => {
  const [fadeIn, setFadeIn] = useState(false); // ✅ No more error

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  return (
    <section className={`testimonials ${fadeIn ? "fade-in" : ""}`}>
      <h2>
         <span>Testimonials</span>
      </h2>
      <p>Don't just take my word for it, see what clients are saying about me.</p>

      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p>" {testimonial.text} "</p>
            <div className="client-info">
              <img src={testimonial.assets} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
