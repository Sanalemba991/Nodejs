const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/API/user"));


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
