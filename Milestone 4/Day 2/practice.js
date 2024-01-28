function myFunc(x,y=10){
    return x+y;
}

console.log(myFunc(5));

const myObj={
    firstName:"saif",
    lastName:"rahman",
    fullName:function(){
        console.log( this.firstName + " "+this.lastName);
    }
}

myObj.fullName();

const person={
    fullName:function(){
        return this.firstname+" "+this.lastname;
    }
}

const p1={
    firstName:"marry",
    lastName:"Kom"
}

const p2={
    firstname:"mrry",
    lastname:"Kom"
}

console.log(person.fullName.call(p2));

const hello={
    fn:"lappe",
    ln:"kala",
    fullN:function(){
        return this.fn+" "+this.ln;
    }
}

const member={
    fn:"kutte",
    ln:"kale"
}

let full=hello.fullN.bind(member);
console.log(full)