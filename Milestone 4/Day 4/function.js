// (function(){
//     console.log("hello");
// })();

// const x=()=>{
//     console.log("hello");
// }



// function sum(...args){
//     let sum=0;

//     for(let x of args){
//         sum+=x;
//     }
//     return sum;
// }


// let x=sum(4,3,34,54,3,3,3);
// console.log(x);

x=sumAll(4,3,44,343,23,23);

function sumAll(){
    let sum=0;

    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }

    return sum;
}
