const numbers=[1,5,6,4,3,12];
const players=[75,45,23,45,12,34];

// const selected=players.filter(p=>p>40);
const selected=players.filter(p=>p%2==1);
console.log(selected)