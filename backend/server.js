const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB().catch(err => {
    console.error("Database connection failed", err);
});

// ✅ Setup CORS (Allow frontend domains)
const corsOptions = {
    origin: ["http://localhost:3000", "https://frontend-navy-pi-35.vercel.app"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 204, // Handle preflight requests properly
};

app.use(cors(corsOptions));

// ✅ Handle preflight requests manually
app.options("*", cors(corsOptions)); // Allow preflight for all routes

app.use(express.json()); // ✅ Middleware for parsing JSON

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

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
