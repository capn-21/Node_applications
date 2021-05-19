const{readFile}=require('fs')
const ht=require('http')

readFile('./chform.html','utf8',(err,resp)=>{
if(err){
    console.log("something is wrong");
}

const data=resp;
console.log(resp)
    const server=ht.createServer((req,res)=>{
        res.end(resp);



    }).listen(1000)










})