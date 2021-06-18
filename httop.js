const http=require('http')

const server=http.createServer((req,res)=>{
if(req.url=='/'){
    res.end(`<h1>HOME PAGE</h1>
    <a href="/app">blivk</a>
    `)
}
if(req.url=='/app'){
    res.end('THIS IS OUR APP')
}


}).listen((8000),()=>{
    console.log('listening on  port 8000>>>>>>>>>')
})