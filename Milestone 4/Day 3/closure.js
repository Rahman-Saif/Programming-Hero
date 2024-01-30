function outer(x){
    function inner(y){
        return x+y;
    }
    return inner;
}

const out=outer(10);
const oout=out(2);
console.log(oout);