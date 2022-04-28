function addAll(){
    var args = Array.prototype.slice.call(arguments);
    var total = 0;
    for(i=0; i< args.length; i++){
    total += args[i];
}
return total;
}
console.log(addAll(2,5,6,7));