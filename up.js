const up=require('upper-case')
const h=require('http')

var str="hello world"
const server=h.createServer((req,res)=>{

if(req.url==="/"){

    res.end(`<h1> Home page</h1>
    <a href="/app">click to see upper case</a>
    `)}
if(req.url==="/app"){
    res.end(up.upperCase(str));
}



}).listen(9000)