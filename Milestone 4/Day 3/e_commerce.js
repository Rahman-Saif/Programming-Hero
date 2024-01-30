console.log("welcome to the e-commerce page using javascript");

console.log("where do you want to go?");
console.log("1.Home page");
console.log("2.Product page");
console.log("3.Account page");

let choose=prompt("enter your choice:");

switch(choose){
    case 1:home_page();
    break;
    case 2:product_page();
    break;
    case 3:account_page();
    break;
    default:
        console.log("you entered wrong number");
}

function home_page(){
    
}