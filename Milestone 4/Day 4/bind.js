const person={
    fname:"saif",
    lname:"rahman",
    fullname:function(){
        return this.fname+" "+this.lname;
    }
}

const member={
    fname:"Hedge",
    lname:"ledger"
}

let fullName=person.fullname.bind(member);
console.log(fullName());