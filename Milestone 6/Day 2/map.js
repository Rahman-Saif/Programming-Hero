const numbers=[3,4,2,3,4,5];

const doubled=[];

function doubleIt(num){
    // console.log(num)
    return num*2;
}

const result=numbers.map(doubleIt);
// console.log(result)

const friends=['john','tom','michael','oliver'];

const lengths=friends.map(frnd=>frnd.length);
console.log(lengths);