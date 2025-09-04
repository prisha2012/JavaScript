function x() {
    
//     for(let i=1;i<=5;i++){
//     setTimeout(function() {
//         console.log(i);

//     }, i*1000);
// }
    for(var x=1;x<=5;x++){
        function close(x){
    setTimeout(function() {
        console.log(x);

    }, x*1000);
}close(x);
}
    console.log("Namaste JavaScript");
}
x();