//node js server created
var http = require('http');

http.createServer(function (req, res) {
    res.write('hello world');
    res.end();
}).listen(8000, function() {
    console.log('Server running at http://localhost:8000/');
});
