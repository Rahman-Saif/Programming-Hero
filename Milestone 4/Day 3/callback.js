// orderPizza('veg','cheese bbq',function(msg){
//     console.log(msg);
// });

// function orderPizza(type,name,callback){
//     console.log(`Pizza ${type} and ${name} is being ordered`);

//     setTimeout(function(){
//         const msg=`pizza ${type} and ${name} is ready`;
//         callback(msg);
//     },3000)
// }

// 

order('meat','bbq',function(msg){
    console.log(msg);
})
function order(type,name,callback){
    console.log(`your ${type} pizza is ordered`);

    setTimeout(function(){
        let msg=`your pizza is ready!!`;
        callback(msg);
    },1000)
}