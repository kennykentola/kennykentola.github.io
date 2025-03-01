const mongoose = require("mongoose");
require("dotenv").config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB Connected...");
//     } catch (error) {
//         console.error("MongoDB Connection Error:", error);
//         process.exit(1); // Exit process with failure
//     }
// };

// module.exports = connectDB;


// const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1); // Stop server if MongoDB connection fails
    }
};

module.exports = connectDB;
