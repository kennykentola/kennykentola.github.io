const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to My Portfolio API!");
});


// Import routes
app.use("/api/messages", require("./routes/messageRoutes"));

app.post("/api/messages/send-message", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Message received:", name, email, message);
    res.json({ success: true, message: "Message received!" });
  });
  
  app.get("/", (req, res) => {
    res.send("Backend is working!");
});


const path = require("path");

// Serve frontend build (if React is inside frontend/ folder)
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
