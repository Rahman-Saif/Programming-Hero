const loadPhone=async()=>{
    const response=await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data=await response.json();
    let hubs=data.data;
    console.log(hubs);
    displayHubs(hubs);
}



const displayHubs=(hubs)=>{
    const cardContainer=document.getElementById('card');

    hubs.forEach(hub =>{
        console.log(1)
        const hubCard=document.createElement('div');
        div.classList=`w-96 bg-gray-100 shadow-xl`;
        hubCard.innerHTML=`
        <figure><img src="${hub.image}" alt="Shoes" /></figure>
                <div class="card-body">
                <h2 class="card-title">Features!</h2>
                <ul>
                    <li>Natural Language Processing</li>
                    <li>Contextual Understanding</li>
                    <li>Text Generation</li>
                </ul>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">ChatGPT</button>
                    <p class="date">11/02/23</p>
                </div>
             </div>
        `;

        cardContainer.appendChild(hubCard);
    })
}


loadPhone()