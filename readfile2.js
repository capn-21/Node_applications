const {readFile}=require('fs');


const getfiled =(rasta)=>{
    return new Promise((res,rej)=>{
        readFile(rasta,'utf8',((err,data)=>{
            if(err){
                rej(err)
            }else{
            res(data)
            }
        }))

    })

}


getfiled('./content/randomcrap.txt')
.then((result) =>console.log(result))
.catch((err)=>console.lof(err))