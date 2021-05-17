const{rename}=require('fs')

rename('./content/written.txt','rename.txt',(error)=>{
    if(error){
       return error;
    }
})

console.log("file renamed");

