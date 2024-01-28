let shirts=[];



function display(){
    for(let i=0;i<shirts.length;i++){
        console.log(shirts[i]);
    }
}



let count=0;

// let number=prompt("how many shirts do you want?");

// for(let i=0;i<3;i++){
//     shirts[i]=prompt("give colors");
//     if(shirts.includes(shirts[i-1])){
//         count++;
//         console.log(count);
//     }
// }

display()

const tshirts={
    name:"alolo",
    size:"all",
    available:"free",
    model:["l","x"]
}

const pants={
    brand:"ghirke_uth",
    motto:"keep thigh high",
    media:"youtube"
}


let mod=prompt("here");
tshirts.model.push(mod);


for(let x in tshirts.model){
    console.log(tshirts.model[x]);
}

let total=0;

let quantity=prompt("how many items you want to buy?");

total=quantity*150;
console.log("total tk"+total);

try{
    if(count>0){
        console.log("safe");
    }
}catch(error){
    console.log("error deteced!")
}


















