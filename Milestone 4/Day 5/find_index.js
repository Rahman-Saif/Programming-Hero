var numbers=[4,2,5,4,2,1];

var result=numbers.findIndex((currentValue,index,arr)=>{
    return currentValue>4;
})

console.log(result)

