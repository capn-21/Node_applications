const{readFile}=require('fs');

readFile('./file3.txt','utf8',((err,data)=>{
if(err){
    console.log("404 error");

}

console.log(data)


}))