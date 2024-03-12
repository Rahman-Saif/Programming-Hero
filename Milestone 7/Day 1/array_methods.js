const products=[
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
    {name:'laptop',price:3200,brand:'lenovo',color:'silver'},
]

const brands=products.map(product=>product.brand);
const prices=products.map(product=>product.price);

const cheap=products.filter(product=>product.price<500);
console.log(brands)