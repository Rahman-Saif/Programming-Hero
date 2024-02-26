function greeting(greetingHandler,name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log(`good morning ${name}`);
}

function greetEvening(name){
    console.log(`good evening ${name}`);
}

greeting(greetingHandler,'rahman');
greeting(greetEvening,'sulaiman');