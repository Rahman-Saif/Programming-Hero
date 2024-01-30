let status=true;

console.log(`task 1 done successfully!`);

const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        if(status){
            resolve('task 2 done');
        }else{
            reject('task 2 not done');
        }
    },2000)
})

promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

console.log(`task 3 done`);