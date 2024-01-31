const numbers=[3,4,5,6,7,8];

let result=numbers.filter((currentValue,index,arr)=>{
    return currentValue>4;
})

console.log(result);