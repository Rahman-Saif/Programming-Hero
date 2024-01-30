const person={
    fullname:function(){
        return this.fname+" "+this.lname;
    }
}

const p1={
    fname:"saif",
    lname:"rahman"
}

const p2={
    fname:"twinkle",
    lname:"rahman"
}

console.log(person.fullname.call(p2));