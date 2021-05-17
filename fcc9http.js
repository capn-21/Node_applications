const ht=require('http');

const derver=ht.createServer((req,res)=>{
if(req.url=='/'){
    res.end("main pageeeeeeeee")
}
if(req.url=='/about'){
    res.end("this is the about page")
}
res.end(`
<h1>error :69</h1>
<h3> we cannot find the page your looking for</h3>
<a href="/">click to go back to home page</a>
`)
})

derver.listen(5000)