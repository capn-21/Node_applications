const prompt = require('prompt-sync')();
function addition ()
{
var n1 = prompt('Enter your first number :');
var n2 = prompt('Enter your second number :');
console.log("your addition of number is :"
, parseInt(n1)+parseInt(n2));
}
console.log(addition());