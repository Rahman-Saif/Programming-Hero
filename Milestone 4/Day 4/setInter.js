function showmsg(){
    console.log(`hello world!`);
}

var intervalId=setInterval(showmsg,1000);
clearInterval(intervalId);