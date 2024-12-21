const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../Users"); // Adjust the path as necessary

// Get all users
router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;
