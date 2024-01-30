const person={
    firstName:"hello",
    lastName:"world",
    age:50,
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}

// console.log(person.fullName());
// console.log(person.firstName.at(0));
// let text=person.firstName.substr(2,2);
// console.log(text);
// console.log(person.firstName.toUpperCase());
// console.log(person.firstName.concat(" ",person.lastName));
// let s="   wow!";
// console.log(s.trim());
// let text=person.firstName.replace("hello","miao");
// console.log(text);
// let str="a b c d e f g";
// const myArr=str.split(" ");
// let len=myArr.length;
// for(let i=0;i<len;i++){
//     console.log(myArr[i]);
// }

let str="hello why you did this?";
// console.log(str.search("why"));
// console.log(str.match("why"));
console.log(str.startsWith("hello"));