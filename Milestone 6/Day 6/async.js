const { log } = require("async");

const myLoader=function(){
    return new Promise((resolve,reject)=>{
        const success=true;
        if(success){
            resolve(0.3);
        }else{
            reject(0.7);
        }
    })
}

myLoader()
.then(data=>console.log('resolved data'))
.catch(err=>console.log('error'));