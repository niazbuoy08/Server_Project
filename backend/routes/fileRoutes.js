const express = require("express");
const { uploadFile, deleteFile } = require("../controllers/FileController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

// File storage config (basic local storage)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

const router = express.Router();

router.post("/upload", authMiddleware, upload.single("file"), uploadFile);  // Upload File
router.delete("/:fileId", authMiddleware, deleteFile);                      // Delete File

module.exports = router;
