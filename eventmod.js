const eve = require('events');

const  evem = new eve();

evem.on('tut',(a,b)=>{
    console.log(a-b);
});

evem.emit('tut',2,3);


class nava{
constructor(nav){
    super();
    this._name = nav;
}
getname(){
    return(this._name);
}

}

let meow = new personalbar('pedro');