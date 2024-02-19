const availableSeat=document.getElementById('available-seat').innerText;
const amarId=document.getElementById('amarid');
// console.log(availableSeat);
 let Avail=parseInt(availableSeat);
const buttons=document.getElementsByClassName('kbd');

for(const btn of buttons) {
    btn.addEventListener("click",function(e){
        console.log(btn.id);
        btn.classList.add("bg-orange-400");
        Avail=Avail-1;
        document.getElementById('available-seat').innerText=Avail;
        const li=document.createElement('li');
        const p1=document.createElement('p');
        const p2=document.createElement('p');
        const p3=document.createElement('p');
        p1.innerText=btn.id;
        p2.innerText="Economy";
        p3.innerText="500";
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        amarId.appendChild(li);
    })
};