const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const nodemailer = require("nodemailer");

router.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Setup nodemailer
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email options
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: "New Message from Your Website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // ✅ Add `success: true` so React knows the request was successful
    res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ success: false, error: "Error sending message." });
  }
});

module.exports = router;
