function myCalc(n1,n2,callback){
    let sum=n1+n2;
    callback(sum);
}

function myDisplay(sum){
    console.log(sum);
}

myCalc(5,5,myDisplay);