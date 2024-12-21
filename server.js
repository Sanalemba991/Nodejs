// //node js server created
// var http = require('http');

// http.createServer(function (req, res) {
//     res.write('hello world');
//     res.end();
// }).listen(8000, function() {
//     console.log('Server running at http://localhost:8000/');
// });

const express = require("express");
const app=express()
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000")
})