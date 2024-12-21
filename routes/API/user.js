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

router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.sendStatus(400);
  }

  const newUser = {
    id: uuid.v4(),
    name: name,
    email: email,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});
router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const update = req.body;

    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = update.name ? update.name : user.name;
        user.email = update.email ? update.email : user.email;

        return res.json({ msg: "User updated successfully", user });
      }
    });
  } else {
    res.status(404).json({ msg: "User not found" });
  }
});


module.exports = router;
