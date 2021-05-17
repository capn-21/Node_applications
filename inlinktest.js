const {unlink}=require('fs')

unlink('./content/testingasy.html',(err)=>{

    if(err){
        return err;

    }
    console.log("file deleted");
})