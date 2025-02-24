require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // MongoDB connection
const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");
const shareRoutes = require("./routes/shareRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const loggingMiddleware = require("./middleware/loggingMiddleware");

const app = express();

// Connect to Database
connectDB().then(() => {
    console.log("Database connected successfully.");
}).catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
});

// Middleware
app.use(cors()); // Enable CORS for API security
app.use(express.json());
app.use(loggingMiddleware);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/share", shareRoutes);
app.use("/api/admin", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Handle Undefined Routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Global Error Handling for Uncaught Errors
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Promise Rejection:", err);
    process.exit(1);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
