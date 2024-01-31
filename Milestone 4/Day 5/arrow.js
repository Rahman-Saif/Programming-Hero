var javascript={
    name:'javascript',
    libraries:["react","angular","vue"],
    printLibraries:function(){
        this.libraries.forEach((a)=>console.log(`${this.name} loves ${a}`));
        
    }
}

javascript.printLibraries()