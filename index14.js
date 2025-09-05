//map
const arr=[5,1,3,2,6]; 

// double - 10,2,6,4,12
//tripple - 15,3,9,6,18
//binary - 101,1,11,10,110

function double(x){
    return x*2;
}
function tripple(x){
    return x*3;
}
const output=arr.map((x)=> x.toString(2)
);

console.log(output);
