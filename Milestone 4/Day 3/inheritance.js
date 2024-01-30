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

}
class Cricketer extends Player{
    
    #centuries;

    constructor(name,age,centuries){
        super(name,age);
        this.#centuries=centuries;
    }

    
}

class Footballer extends Player{
    
    #goals;

    constructor(name,age,goals){
        super(name,age);
        this.#goals=goals;
    }

    
}

const sakib=new Cricketer("sakib",45,200);
console.log(sakib.getPlayerDetails())
const ronaldo=new Cricketer("ronaldo",65,200);
console.log(ronaldo.getPlayerDetails())