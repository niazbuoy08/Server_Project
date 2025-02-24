const express = require("express");
const { register, login } = require("../controllers/AuthController");

const router = express.Router();

router.post("/register", register);  // User Registration
router.post("/login", login);        // User Login

module.exports = router;
