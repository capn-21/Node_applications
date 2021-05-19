const{readFile}=require('fs')
const ht=require('http')
readFile('./addition.html','utf8',(error,answer)=>{

    if(error){
        console.log("something is wrong");

    }
    const cow=answer


    const server=ht.createServer((req,res)=>{

        if(req.url==="/"){
            res.end(`<h1>Main page</h1>
            <a href="/app"> click to start</a>`)
        }
        
        if(req.url==="/app"){
            res.end(cow)
         }
        




    }).listen(6969);



})