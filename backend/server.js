require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Optional: Only needed if your frontend is on a different domain/port

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Check for required environment variables
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env file");
  process.exit(1);
}

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Middleware
app.use(express.json());
app.use(cors()); // Optional: Enable CORS

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// ✅ Health Check Route
app.get("/health", (req, res) => {
  res.json({ 
    success: true, 
    message: "Server is healthy and running!", 
    timestamp: new Date() 
  });
});

// ✅ Import and Use Routes
app.use("/api/messages", require("./routes/messageRoutes")); 
app.use("/api/appointments", require("./routes/appointmentRoutes")); // NEW APPOINTMENT ROUTE

// ✅ Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: `Route not found: ${req.method} ${req.originalUrl}` 
  });
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Global Error Handler:", err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

// ✅ Start Server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));




// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5001;

// // ✅ Check for required environment variables
// if (!process.env.MONGO_URI) {
//   console.error("❌ MONGO_URI is not defined in .env file");
//   process.exit(1);
// }

// // ✅ Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Connected to MongoDB!"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // ✅ Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Test Route
// app.get("/", (req, res) => {
//   res.send("Backend is working!");
// });

// // ✅ Health Check Route
// app.get("/health", (req, res) => {
//   res.json({ 
//     success: true, 
//     message: "Server is healthy and running!", 
//     timestamp: new Date() 
//   });
// });

// // ✅ Import and Use Routes
// app.use("/api/messages", require("./routes/messageRoutes")); 
// app.use("/api/appointments", require("./routes/appointmentRoutes"));

// // ✅ Handle 404 errors
// app.use((req, res) => {
//   res.status(404).json({ 
//     success: false, 
//     message: `Route not found: ${req.method} ${req.originalUrl}` 
//   });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("❌ Global Error Handler:", err.stack);
//   res.status(500).json({ success: false, message: "Something went wrong!" });
// });

// // ✅ Start Server
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5001;

// // ✅ Check for required environment variables
// if (!process.env.MONGO_URI) {
//   console.error("❌ MONGO_URI is not defined in .env file");
//   process.exit(1);
// }

// // ✅ Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ Connected to MongoDB!"))
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err.message);
//     // console.log("🔍 Check your MONGO_URI and credentials in .env file.");
//     process.exit(1);
//   });
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ Connected to MongoDB!"))

// //   .catch((err) => {
// //     console.error("❌ MongoDB Connection Failed:", err.message);
// //     console.log("🔍 Check your MONGO_URI and credentials in .env file.");
// //     process.exit(1);
// //   });

// // ✅ Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Test Route
// app.get("/", (req, res) => {
//   res.send("Backend is working!");
// });

// // ✅ Health Check Route
// app.get("/health", (req, res) => {
//   res.json({ 
//     success: true, 
//     message: "Server is healthy and running!", 
//     timestamp: new Date() 
//   });
// });

// // ✅ Import and Use Routes
// const messageRoutes = require("./routes/messageRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes");

// app.use("/api/messages", messageRoutes);
// app.use("/api/appointments", appointmentRoutes);

// // ✅ Handle 404 errors
// app.use((req, res) => {
//   res.status(404).json({ 
//     success: false, 
//     message: `Route not found: ${req.method} ${req.originalUrl}` 
//   });
// });

// // ✅ Global Error Handler
// app.use((err, req, res, next) => {
//   console.error("❌ Global Error Handler:", err.stack);
//   res.status(500).json({ success: false, message: "Something went wrong!" });
// });

// // ✅ Start Server
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
