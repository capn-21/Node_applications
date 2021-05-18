const ht=require('http');

const derver=ht.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});

if(req.url==='/'){
    res.end("main pageeeeeeeee")
}
if(req.url==='/about'){
    res.end("this is the about page")
}
res.end(`cant find what your are lookinhg for`)
})

derver.listen(8000)