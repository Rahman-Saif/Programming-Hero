const loadPhone=async(searchText,isShowAll)=>{
    const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await response.json();
    let phones=data.data;
    displayPhones(phones,isShowAll);
}

/*
1.create a div
2.set innerHTML
3.append child

*/
const displayPhones=(phones,isShowAll)=>{
    
        const phoneContainer=document.getElementById("phone-container");
        phoneContainer.innerText="";

        const showAllContainer=document.getElementById("show-all-container");
        if(phones.length>12 && !isShowAll){
            showAllContainer.classList.remove('hidden');
        }else{
            showAllContainer.classList.add('hidden');
        }
        
        if(!isShowAll){
            phones=phones.slice(0,12);
        }

    phones.forEach(phone=>{
        // console.log(phone);
        const phoneCard=document.createElement('div');
        // console.log(phoneContainer)

        phoneCard.classList=`w-96 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML=`
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Details</button>
            </div>
            </div>
        `;

        phoneContainer.appendChild(phoneCard);
        toggleLoadingSpinner(false);
    })
}


const handleSearch=(isShowAll)=>{
    toggleLoadingSpinner(true);
    const searchField=document.getElementById("input-field");
    const searchText=searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll)
}

const showPhoneDetails=(phone)=>{
    show_details_modal.showModal();
    const phoneName=document.getElementById("show-detail-phone-name");
    phoneName.innerText=phone.name;
    const showDetailContainer=document.getElementById("show-detail-phone-name");
    showDetailContainer.innerHTML=`
        <img src="${phone.image}" alt="" />
        <p><span>Storage</span>${phone?.mainFeatures?.storage}</p>
    `
}
function toggleLoadingSpinner(isLoading){
    const loadingSpinner=document.getElementById("loading-spinner");
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }else{
        loadingSpinner.classList.add('hidden');
    }
}


const handleShowAll = ()=>{
    handleSearch(true)
}

const handleShowDetail=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await res.json();
    const phone=data.data;
    showPhoneDetails(phone);

}