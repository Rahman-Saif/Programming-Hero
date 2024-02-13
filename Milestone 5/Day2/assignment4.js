// function calculateMoney(ticketSale){
//     let ticket_money=120;
// let guard_money=500;
// let lunch_money=(8*50);

//     if(ticketSale>=0){
//     return (ticketSale*ticket_money)-(guard_money+lunch_money);
//     }else{
//         return `Invalid Number`;
//     }
// }


// function checkName(name){
//     if(typeof(name)!="string"){
//         return `invalid`;
//     }
//     let length=name.length;
//     let lastChar=name[length-1];
//     if(lastChar=='a'||lastChar=='e'||lastChar=='i'||lastChar=='o'||lastChar=='u'||lastChar=='w'||lastChar=='y'||lastChar=='A'||lastChar=='E'||lastChar=='I'||lastChar=='O'||lastChar=='U'||lastChar=='W'||lastChar=='Y'){
    
//         return `Good Name`;
//     }else{
//         return `Bad Name`;
//     }
    
// }

// function deleting_num(num){
//     if(typeof(num)=="number")return num;
// }
function deleteInvalids(array){
    if(Array.isArray(array)){
    let findingnumber=array.filter((num)=>typeof(num)=="number");
    console.log(findingnumber);
    }
    else{
        console.log("Invalid Input!");
    }
    
}

console.log(deleteInvalids([2,3,4,'@']));

// function password(obj){
//     const properties=Object.keys(obj);
//     const length=properties.length;
//     const {name,birth,site}=obj;
//     const birthh=obj.birth.toString().length;
//     if(length<3 ||birthh<4){
//         return `invalid input`;
//     }
//     else{
//     return `${site}#${name}@${birth}`
//     }
// }


// function monthlySavings(arr,livingCost){
//     let length=arr.length;
//     let savings=0;

//     if(!Array.isArray(arr) || !typeof(livingCost)=='number'){
//         return `invalid input`
//     }
//     for(let i=0;i<length;i++){
//         if(arr[i]<3000)savings+=arr[i];
//         else{
//             savings+=arr[i]-(arr[i]*(20/100));
//         }
//     }
//     if(savings-livingCost>=0){
//         return savings-livingCost;
//     }else{
//         return `earn more`
//     }
// }