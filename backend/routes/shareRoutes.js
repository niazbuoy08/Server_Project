const express = require("express");
const { shareFile } = require("../controllers/ShareController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/share", authMiddleware, shareFile);  // Share a file

module.exports = router;
