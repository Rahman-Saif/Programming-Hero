const add=(n1,n2)=>{
    let result=n1+n2;
    return result;
}

// console.log(add(4,5));

const getAge=(person)=>person.age;
const student={name:'Ananta',age:45};
const age=getAge(student);
console.log(age);