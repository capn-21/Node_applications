const http =require('http')

const server= http.createServer((req,res)=>{
if(req.url==="/not"){
    res.end('end page(not)')
}
if(req.url==="/home"){
    res.end('home page(home)')
}
res.end('defaultnpp')

}).listen(2000)