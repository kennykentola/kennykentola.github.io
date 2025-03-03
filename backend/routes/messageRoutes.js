// const express = require("express");
// const router = express.Router();
// const Message = require("../models/Message");
// const nodemailer = require("nodemailer");

// // ✅ Correctly define the POST route
// router.post("/send-message", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, error: "All fields are required!" });
//   }

//   try {
//     // Save to MongoDB
//     const newMessage = new Message({ name, email, message });
//     await newMessage.save();

//     // Send email notification
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     let mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "New Message Received",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, error: "Server error while sending message." });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Message = require("../models/Message");
// const nodemailer = require("nodemailer");

// // ✅ POST route to send a message
// router.post("/send-message", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, error: "All fields are required!" });
//   }

//   try {
//     // Save to MongoDB
//     const newMessage = new Message({ name, email, message });
//     await newMessage.save();

//     // Send email notification
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     let mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: "New Message Received",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, error: "Server error while sending message." });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const Message = require("../models/Message"); // Ensure this model exists
const nodemailer = require("nodemailer");

// ✅ POST route to send a message
router.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required!" });
  }

  try {
    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Check if email credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("⚠️ EMAIL_USER or EMAIL_PASS is missing. Skipping email notification.");
    } else {
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
        to: process.env.EMAIL_USER,
        subject: "New Message Received",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, error: "Server error while sending message." });
  }
});

module.exports = router;
