//reduce

const arr=[5,1,3,2,6];

//sum of all numbers


const output=arr.reduce(function(acc,curr){
 acc= acc+curr;
    return acc;
    },);
    console.log(output);

    const output1=arr.reduce(function(acc,curr){
 if(curr>acc){
    acc=curr;
 }
    return acc;
    },0);
    console.log(output1);