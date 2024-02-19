const allbtns=document.getElementsByClassName('add-btn');

let count=0;

for(const btn of allbtns){
    count=count+1;
    setInnerText('cart',count);

    const placeName=e.target.parentNode.childNodes[1].innerText;
    const price=e.target.parentNode.childNodes[3].childNodes[1].innerText;

    const selectedContainer=document.getElementById('selected-place-container');
    const li=document.createElement('li');

    const p=document.createElement('p');
    p.innerText=placeName;
    const p2=document.createElement('p');
    p2.innerText=price;

    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer.appendChild(li);

    const totalCost=document.getElementById('total-cost').innerText;

    const convertedTotalCost=parseInt(totalCost);
    document.getElementById('total-cost').innerText=convertedTotalCost+parseInt(price);
}

function totalCost(id,value){
    const totalCost=document.getElementById(id).innerText;
    const convertedTotalCost=parseInt(totalCost);
    const sum=convertedTotalCost+parseInt(value);
    setInnerText(id,sum);
}

function setInnerText(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}

function grandTotalCost(category){
    if(category=='bus'){
        setInnerText('grand-total',convertedTotalCost+100);
    }else if(category=='train'){
        setInnerText('grand-total',convertedTotalCost-200);

    }
}

