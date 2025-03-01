const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const nodemailer = require("nodemailer");

// ✅ POST route to create an appointment
router.post("/book", async (req, res) => {
  const { name, email, date, time } = req.body;

  if (!name || !email || !date || !time) {
    return res.status(400).json({ success: false, error: "All fields are required!" });
  }

  try {
    // Save to MongoDB
    const newAppointment = new Appointment({ name, email, date, time });
    await newAppointment.save();

    // Send email notification
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send confirmation email to the user
      subject: "Appointment Confirmation",
      text: `Hello ${name},\n\nYour appointment is confirmed for ${date} at ${time}.\n\nBest regards,\nYour Team`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Appointment booked successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Server error while booking appointment." });
  }
});

module.exports = router;
