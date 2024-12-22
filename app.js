// const express = require("express");
// const app = express();

// app.listen(4000, () => {
//   console.log("Listening on port number 4000");
// });

// app.get("/getRequest", (req, res) => {
//   res.send("Hello, it was a successful GET request");
// });

// app.post("/postRequest", (req, res) => {
//   res.send("hello this is successfull post request");
// });
// const express = require("express");
// const app = express();

// const reqFilter = (reqobject, resobject, next) => {
//   console.log("reqFilter");
//   next();
// };
// app.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send("Hello, it was a successful GET request");
// });

// app.get("/home", (req, res) => {
//   res.send("Hello, it was a successful GET request home page");
// });
// app.listen(5000, () => {
//   console.log("listening on port number 5000");
// });
//morgan happ alhotpa
// const express = require("express");
// const module = require ("morgan");
// const createError = require("http-errors");
// require(`dotenv`).config;

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`listening on port number ${PORT}`);
// });

const express=require('express');
const app=express();
const PORT=4000;
app.listen(
    PORT,()=>{
        console.log(`listen to the PORT ${PORT}`);
    }
)



