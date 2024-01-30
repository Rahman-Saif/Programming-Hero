function getRandom(min,max){

    const randomFraction=Math.random();

    const randomInRange=randomFraction*(max-min)+min;

    return Math.floor(randomFraction);
}

const result=getRandom(1,11);
console.log(result);