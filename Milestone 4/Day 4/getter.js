class Car{
    constructor(name){
        this.name=name;
    }

    get carname(){
        return this.name;
    }

    set carname(x){
        this.name=x;
    }

    static hello(){
        console.log("i am  a car!");
    }
}

const mycar=new Car("ford");
mycar.name="volvo";
console.log(mycar.carname);
console.log(Car.hello());