const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB().catch(err => {
    console.error("Database connection failed", err);
});

// ✅ Setup CORS to allow frontend access
const corsOptions = {
    origin: ["http://localhost:3000", "https://frontend-navy-pi-35.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // Middleware for JSON parsing

// ✅ Test route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// ✅ Import and use routes
app.use("/api/messages", require("./routes/messageRoutes"));

// ✅ Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
