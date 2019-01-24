function printWindowValues() {
   for (var key in window) {
    console.log(key);
   }
}
printWindowValues();


function expTen(a) {
    var res=1;
    for (var i=0;i<10;i++){
        res=res*a;
    }
    console.log(res);
}
expTen(2);


function getFuncRes(func, n) {
    var res= func(n);
    return res;
}
getFuncRes(console.log, "Hello world")
