const express = require("express");
const { getAllUsers, getAllSessions } = require("../controllers/AdminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", authMiddleware, getAllUsers);         // Get all users (Admin Only)
router.get("/sessions", authMiddleware, getAllSessions);  // Get all active sessions

module.exports = router;
