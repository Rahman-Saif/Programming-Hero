const paymentSucess=true;
const marks=85;

function enroll(){
    console.log("course enrollment on progress!");

    const promise=new Promise(function(resolve,reject){
        setTimeout(function(){
        if(paymentSucess){
            resolve();
        }else{
            reject(`Payment failed!`);
        }
    },2000)
    })
    return promise;
}

function progress(){
    console.log(`course  on progress!`);

    const promise=new Promise(function(resolve,reject){
        setTimeout(function(){
        if(marks>=80){
            resolve();
        }else{
            reject(`you could not get enough marks to get the certificate!`);
        }
    },2000)
    })
    return promise;
}

function getCertificate(){
    console.log(`preparing your certificate!`);

    const promise=new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve(`congrats! you got the certificate!`);
    },1000)
    })
    
    return promise;
}

async function course(){
    try{
    await enroll();
    await progress();
    const message=await getCertificate();
    console.log(message);
    }catch(err){
        console.log(err);
    }
}

course();