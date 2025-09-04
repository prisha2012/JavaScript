function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}
var z= x();
console.log(z);
z();

/*
uses of closure 
-Module design pattern
- currying
-function like once
-,emoize
- setTimeouts
-maintaining state in async world
- iterators
*/

