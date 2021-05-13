const {readFile,writeFile}= require('fs')

readFile('./content/resultasync.txt','utf8',(err,res)=>{
    if(err){
        console.log("error found")
    }
    console.log(res);
})



readFile('./content/fst.txt','utf8',(err,result)=>{
    if(err){
        return console.log('NO ERROR');
    }
    //console.log(result);
    const fst=result;

    readFile('./content/written.txt','utf8',(err,result)=>{
        if(err){
            return console.log('NO ERROR');
        }
       // console.log(result);
       const sec=result

        writeFile('./content/resultasync.txt',"results are baded",(err,result)=>{
              if(err){
            return console.log('NO ERROR');
        }
        console.log(result)
        });


    })

})

