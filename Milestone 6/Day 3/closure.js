function kitchen(){
    let roast=0;
    return function(){
        roast++;
        return roast;
    }
}

const w=kitchen();
console.log(w());
console.log(w());
console.log(w());
console.log(w());
console.log(w());