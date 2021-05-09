var http= require('http');
var fu =require('./datemodule');

http.createServer(function (req, res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("the date is opiwppd :"+fu.myDate());
    res.end();




}).listen(8080);