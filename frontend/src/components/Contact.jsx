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
    appointmentDate: "",
    appointmentTime: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission (Messages & Appointments)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      // Send message request
      const messageResponse = await fetch("https://backend-rntqth1tu-kennykentolas-projects.vercel.app/api/messages/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          contactMethod: formData.contactMethod,
          referral: formData.referral,
        }),
      });

      const messageData = await messageResponse.json();

      if (!messageData.success) {
        throw new Error("Failed to send message. Please try again.");
      }

      // If an appointment is scheduled, send appointment request
      if (formData.appointmentDate && formData.appointmentTime) {
        const appointmentResponse = await fetch("https://backend-rntqth1tu-kennykentolas-projects.vercel.app/api/appointments/book", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            date: formData.appointmentDate,
            time: formData.appointmentTime,
          }),
        });

        const appointmentData = await appointmentResponse.json();

        if (!appointmentData.success) {
          throw new Error("Failed to schedule appointment. Please try again.");
        }
      }

      setResponseMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
        contactMethod: "Email",
        referral: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <section id="contact" className="contact-container">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email Address </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Subject </label>
            <select name="subject" value={formData.subject} onChange={handleChange}>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Freelance Work">Freelance Work</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message </label>
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <div className="form-group">
            <label>Preferred Contact Method </label>
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

          {/* Scheduling Feature */}
          <div className="form-group">
            <label>Schedule an Appointment (Optional)</label>
            <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} />
            <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} />
          </div>

          <button type="submit" className="send-btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </form>

        {/* Contact Information Section */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:peterkehindeademola@gmail.com">peterkehindeademola@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/kennykentola" target="_blank" rel="noopener noreferrer">github.com/kennykentola</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ademola-peter-kehinde-44650a2b9" target="_blank" rel="noopener noreferrer">linkedin.com/in/ademola-peter-kehinde</a></p>
        </div>
      </section>
    </>
  );
};

export default Contact;
