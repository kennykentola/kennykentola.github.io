require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Connect to MongoDB (Before Routes)
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Middleware
app.use(express.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// ✅ Import and Use Routes
app.use("/api/messages", require("./routes/messageRoutes")); // Ensure this route is correct!

// ✅ Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ✅ Start Server (After MongoDB Connection)
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
