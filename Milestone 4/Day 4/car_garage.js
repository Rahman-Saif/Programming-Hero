class Car{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
}

const garage=[];

const car1=new Car("bmw","red");
const car2=new Car("bmw","red");
const car3=new Car("bmw","red");
const car4=new Car("bmw","blue");

garage.push(car1);
garage.push(car2);
garage.push(car3);
garage.unshift(car4);

find_blue(){
    let blue_car=garage.find()
}