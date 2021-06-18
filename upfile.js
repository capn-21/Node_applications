const {readFile}= require("fs");

const http=require('http');
const { url } = require("inspector");
readFile('./mian page .html','utf8',((err,result)=>{
if(err){
    console.log("error");
}


var server=http.createServer((req,res)=>{
if(res.url==="/"){
    res.end(result);
}
if(res.url==="/about"){
    res.end(" jumped");
}

}).listen(8000);
    
}))