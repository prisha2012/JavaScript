 // callback function
 setTimeout(function(){
    console.log("Hello World");
 }, 5000)
    

 function x (y){
    console.log("I am x");
    y();
 }
 x(function y(){
    console.log("I am y");
 })