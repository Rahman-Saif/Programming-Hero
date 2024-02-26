const data=[{id:1,name:'abul',address:'Kochu Khet'}];

// console.log(data[0].address);

const products={
    count:500,
    data:[
        {id:1,name:"abul",address:'kochu khet'},
        {id:1,name:"abul",address:'kochu khet'},
    ]
}

// console.log(products.data[1].address);

const user={
    id:5001,
    name:'Shoriful Raj',
    address:{
        street:{
            first:'54/1 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        },
        city:'Dhaka'
    }
}

// console.log(user.address.street.first);

const user2={
    id:5002,
    name:'pori bibir majar',
    address:{
        city:"chittagong",
        country:"Bangladesh"
    }
}

console.log(user2.address.street?.second);