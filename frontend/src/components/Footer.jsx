import React from "react";
import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ✅ Brand Name */}
        <div className="footer-brand">
          <h3>Kenkentola</h3>
        </div>

        {/* ✅ Location Section with Embedded Google Map */}
        <div className="footer-section">
          <h4>LOCATION</h4>
          <p>
            <FaMapMarkerAlt style={{ color: "red", marginRight: "5px" }} />
            Ibadan, Oyo NG
          </p>

          {/* ✅ Embedded Google Map */}
          <iframe
  title="Google Map - Ibadan, Oyo"
  src="https://www.google.com/maps/embed?YOUR_VALID_EMBED_URL_HERE"
  width="100%"
  height="250"
  style={{ border: "1px solid #ddd", borderRadius: "10px", marginTop: "10px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>

        {/* ✅ Contact Info */}
        <div className="footer-section">
          <h4>REACH OUT</h4>
          <p><a href="mailto:peterkehindeademola9@gmail.com">peterkehindeademola9@gmail.com</a></p>
          <p><a href="tel:+234904808076">090-4808-2076</a></p>
        </div>

        {/* ✅ Social Media */}
        <div className="footer-section">
          <h4>CONNECT</h4>
          <p>© 2024 kennykentola. All Rights Reserved.</p>

          <div className="social-links">
            <a href="https://www.facebook.com/https://web.facebook.com/kehindepeter.ademola" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://wa.me/+2348163571677" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/Ademola peter kehinde" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
