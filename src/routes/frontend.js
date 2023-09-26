const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});

router.get("/register", (req, res) => {
  const registerPath = path.join(__dirname, "..", "views", "register.html");
  res.sendFile(registerPath);
});

module.exports = router;
