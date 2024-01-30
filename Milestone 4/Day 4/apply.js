const person={
    fullname:function(city){
        return this.fname+" "+this.lname+" "+city;
    }
}

const p1={
    fname:"saif",
    lname:"rahman"
}

console.log(person.fullname.apply(p1,["narayan"]))