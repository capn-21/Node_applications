const{readFile,writeFile}=require('fs');

writeFile('./content/randomcrap.txt','mannnnnnnnnnnnnnfqium omkar cgalken that us an ubfrtunate evenr',(error,data)=>{

    if(error){
        console.log("something is wrong");

    }
    

})

readFile('./content/randomcrap.txt','utf8',(om,ok)=>{
    if(om){
        console.log('oomkae');

    }
    else{

        console.log(ok);
    }
})


