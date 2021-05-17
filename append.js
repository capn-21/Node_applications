const{appendFile}=require('fs')

appendFile('./content/fst.txt',' this is updated data in fs.txt',(err)=>{
    if(err){
        return err;

    }

})

console.log('data append complete');