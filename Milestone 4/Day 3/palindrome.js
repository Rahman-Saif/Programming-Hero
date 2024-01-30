function checkPalin(string){
    let l=string.length;
    for(let i=0;i<l;i++){
        if(string[i]==string[l-i-1])return "not palindrome";
    }

    return "not palindrome";
}

let a="bangladesh";
console.log(checkPalin(a));

