const prompt=require('prompt-sync')();

var a=prompt("enter the value for a");

var b=prompt("enter the value for b");

console.log(`The addition of ${a} + ${b}=${parseInt(a)+parseInt(b)}`);