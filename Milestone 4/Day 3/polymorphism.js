class Player{
    #age;
    #name;

    constructor(name,age){
        this.#name=name;
        this.#age=age;
    }

    getPlayerDetails(){
        return `${this.#name} is ${this.#age} years old `;
    }

    getAge(){
        return this.#age;
    }

    getName(){
        return this.#name;
    }

}
class Cricketer extends Player{
    
    #centuries;

    constructor(name,age,centuries){
        super(name,age);
        this.#centuries=centuries;
    }

    getPlayerDetails(){
        return  `${this.getName()} er ${this.getAge()} ettogula age `;
    }

    
}

class Footballer extends Player{
    
    #goals;

    constructor(name,age,goals){
        super(name,age);
        this.#goals=goals;
    }

    
}

const sakib=new Cricketer("sakib",45,20);
console.log(sakib.getPlayerDetails());