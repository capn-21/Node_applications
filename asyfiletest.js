const{writeFileSync,readFileSync}=require('fs');
const aam=require('./asyexp');

console.log(aam.a)

const htc="   <html";




writeFileSync('./content/testingasy.html',aam.a,(err,ans)=>{
if(err){
    return error;

}

})