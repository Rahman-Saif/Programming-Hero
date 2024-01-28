console.log("Welcome to my Library!");

console.log("Please enter details about your books:");

let title=prompt("title:");
let author=prompt("author:");
let pages=prompt("pages:");
let read=prompt("read:");

let ans=prompt("do you want to add it?");
if(ans=="yes"){
    addBook();
}else{
    removeBook();
}

let books=[];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBook(){
    const newBook=new Book(title,author,pages,read);
    books.push(newBook);
    title=' ';
    author=' ';
    pages=' ';
    read=' ';
}

