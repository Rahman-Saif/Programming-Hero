let a =[1,3,5,3,2,5,3,1];
let len=a.length;

let b=a[0];
let max=0;

for(let i=0;i<len;i++){
    if(a[i]>max){
        max=a[i];
    }
}

console.log(max);