function fact(inp){

    var f=1;

    for( var i=1;i<=inp;i++){
        f=f*i;

    }

    console.log(` the factorial of ${inp} is${f}`);




}


fact(56);

module.exports=fact;