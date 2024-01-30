class User{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    created(){
        console.log(`Account created Successfully!`);
    }
}

let total_money=0;
let deposit_money=0;

function createAccount(){
    const user1=new User("rahman",34);
    const user2=new User("saif",44);
    const user3=new User("twinkle",54);
    const user4=new User("wafi",64);
    const user5=new User("fariha",74);
    user5.created();

}

function Deposit_money(){
    let deposit=prompt("Enter the money:");
    deposit_money+=deposit;
    total_money+=deposit_money;
}

function withdraw_Money(){
    let widthdraw_money=prompt("Enter money you want to withdraw:");
    total_money-=widthdraw_money;
}

createAccount();
Deposit_money();
withdraw_Money();








