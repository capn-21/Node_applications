const prompt=require('prompt-sync')();


function factorial(){
var input=prompt("Enter the value =");
var f=1;

for(var i=1;i<=input;i++){
    f=f*i
}
console.log(`The factorial of ${input} is ${f} `);

}

module.exports=factorial();