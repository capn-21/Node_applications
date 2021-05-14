const{readFileSync,writeFileSync}= require('fs')

writeFileSync('./content/tp.txt',"timepasss");



const data =readFileSync('./content/tp.txt','utf8');

console.log(data);