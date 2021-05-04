function fname(){
    var fullname="mokar c";
    console.log("opendd");
}
const om=50;
class myobj{
    constructor(){
 console.log("object crated");
    }
}


module.exports.fname=fname;

module.exports.om=om;

module.exports.myobj=myobj;

// or module.exports={myobj:myobj,om=om,myobj=myobj}