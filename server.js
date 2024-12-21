const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to handle API users
app.use("/api/users", require("./routes/API/user"));



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
