var bff1 = new Buffer('Samarth');
var bff2 = new Buffer('Mali');
var bff3 = Buffer.concat([bff1,bff2]);
var result = bff1.compare(bff2);
console.log("concat is :");
console.log("Buffer3 Content is :" + bff3.toString());
console.log("compare is :");
if(result < 0){
    console.log(bff1 + " Comes Before " + bff2);
}else if(result == 0){
    console.log(bff1 + " Is Same As " + bff2);
}else{
    console.log(bff1 + " Comes After " + bff2);
}
console.log("copy is :");
bff2.copy(bff1);
console.log(bff1.toString());