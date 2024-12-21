const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let users = require("../../Users");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

// Create a new user
router.post("/", (req, res) => {
  const { name, email } = req.body;

  // Check if name or email is missing
  if (!name || !email) {
    return res.sendStatus(400); // Bad Request if name or email is missing
  }

  const newUser = {
    id: uuid.v4(), // Generate a new unique ID
    name: name,
    email: email
  };

  users.push(newUser); // Add the new user to the list

  // Respond with the created user and a 201 status code (Created)
  res.status(201).json(newUser);
});

module.exports = router;
