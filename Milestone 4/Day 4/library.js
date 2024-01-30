let library=[];
let choice;

class Book{
    constructor(title,author,bookid,availablecopies){
        this.title=title;
        this.author=author;
        this.bookid=bookid;
        this.availablecopies=availablecopies;
    }
}


function addBook(){
    let title=prompt("Enter title:");
    let author=prompt("Enter Author:");
    let bookid=prompt("Enter bookid:");
    let availablecopies=1;

    const book=new Book(title,author,bookid,availablecopies);
    library.push(book);

}

function Display(){
    let  lib_len=library.length;
    for(let key in library){
        console.log(library[key]);
    }

}


    do{
    console.log(`Library Management System!`);
    console.log(`1.Add Books`);
    console.log(`2.Display Books`);
    console.log(`3.Lend Books`);
    console.log(`4.Exit`);
    choice=prompt("enter your choice:");
    choice=parseInt(choice);

    switch(choice){
        case 1:addBook();
        break;
        case 2:Display();
        break;
        case 4:console.log(`Exiting the Program!`);
        break;
    }
}while(choice!=4);
