
var fs = require('fs');

fs.readFile('./content/fst.txt' , 'utf-8' , function(err,data){

    fs.readFile('./content/randomcrap.txt' , 'utf-8' , function(err2,data2){

        let str = data + ' ' + data2;
        fs.writeFile('./file3.txt' , str.toUpperCase() , function(){});        
    })
})