//tricky map,reduce ,filter

const user=[
    {firstName:"akshay",lastname:"saini",age:26},
    {firstName:"donald",lastname:"trump",age:75},
    {firstName:"elon",lastname:"musk",age:50},
    {firstName:"jeff",lastname:"bezos",age:58},
];

//list of full name
const output=user.map(x=> x.firstName+" "+x.lastname);
console.log(output);

//{26:2,75:1,50:1,58:1}

const output1=user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(output1);

//filter out all the users whose age is less than 30

const output2=user.filter((x)=>x.age<30).map(x=>x.firstName);
console.log(output2);