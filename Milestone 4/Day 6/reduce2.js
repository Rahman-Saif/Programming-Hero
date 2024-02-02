var numbers=[3,4,5,6];

var result=numbers.reduce((prevValue,currentValue)=>{
    return prevValue+currentValue;
},0);

console.log(result);