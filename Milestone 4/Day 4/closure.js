function temporary(){
    let counter=0;

    return function(){
        counter=counter+1;
    }
}

const add=temporary();
add();
add();
add();
add();
console.dir(counter)
