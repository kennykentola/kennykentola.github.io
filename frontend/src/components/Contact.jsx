import React, { useState } from "react";
import "../components/Contact.css"; // Ensure this file exists

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    contactMethod: "Email",
    referral: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/messages/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
          contactMethod: "Email",
          referral: "",
        });
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      alert("An error occurred.");
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <section id="contact" className="contact-container">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Subject *</label>
            <select name="subject" value={formData.subject} onChange={handleChange}>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Freelance Work">Freelance Work</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <div className="form-group">
            <label>Preferred Contact Method *</label>
            <div className="radio-group">
              <input type="radio" name="contactMethod" value="Email" checked={formData.contactMethod === "Email"} onChange={handleChange} />
              <label>Email</label>

              <input type="radio" name="contactMethod" value="Phone" checked={formData.contactMethod === "Phone"} onChange={handleChange} />
              <label>Phone</label>
            </div>
          </div>

          <div className="form-group">
            <label>How did you hear about me?</label>
            <input type="text" name="referral" value={formData.referral} onChange={handleChange} />
          </div>

          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:peterkehindeademola@gmail.com">peterkehindeademola@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/kennykentola" target="_blank" rel="noopener noreferrer">github.com/kennykentola</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ademola-peter-kehinde-44650a2b9" target="_blank" rel="noopener noreferrer">linkedin.com/in/ademola-peter-kehinde</a></p>
      </section>
    </>
  );
};

export default Contact;
