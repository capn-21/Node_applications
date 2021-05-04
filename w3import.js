var http = require('http');
var we = require('./w3export');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + we.vel());
    res.end();
  }).listen(8080);