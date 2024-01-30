const paymentSucess=true;
const marks=75;

function enroll(callback){
    console.log(`course enrollment is in progress!!`);

    setTimeout(function(){
        if(paymentSucess){
            callback();
        }else{
            console.log(`Payment failed!`);
        }
    },2000)
}

function progress(callback){
    console.log(`course on progress!`);

    setTimeout(function(){
        if(marks>=80){
            callback();
        }else{
            console.log(`you could not get enough marks to get the certificate!`);
        }
    },2000)
}

function getCertificate(){
    console.log(`preparing your certificate!`);

    setTimeout(function(){
        console.log(`congrats! you got the certificate!`);
    },1000)
}

enroll(function(){
    progress(getCertificate);
})