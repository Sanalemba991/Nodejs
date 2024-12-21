const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../Users"); 

// Get all users
router.get("/", (req, res) => {
  res.json(users);
});

// Get user by ID
router.get("/:id", (req, res) => {

  const user = users.find(user => user.id === parseInt(req.params.id));

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
