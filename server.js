// //node js server created
// var http = require('http');

// http.createServer(function (req, res) {
//     res.write('hello world');
//     res.end();
// }).listen(8000, function() {
//     console.log('Server running at http://localhost:8000/');
// });

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/users", require("./routes/API/user"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

