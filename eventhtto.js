const d=require('http')

var server=d.createServer((req,res)=>{

console.log('resp on');
res.end("addadada");


}).listen(5000,()=>{
    console.log('listening to port 5k');
})