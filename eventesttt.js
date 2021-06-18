const {readFile}=require('fs');
const fact = require('./factorial');
const factt=require('./factorial');
console.log("starting the tasks");

readFile('./content/randomcrap.txt',"utf8",(err,data)=>{
    if(err){
        console.log("someting ent wrong");

    }
    console.log(data);
    console.log('task finished');



})



console.log('starting next task');

console.log(fact);