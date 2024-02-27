fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

/*
json ke parse korle seta Object hoy
Object ke stringfy korle seta JSON hoy!
*/

function showUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data));
}