const loadCategory=async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data=await response.json();

    const categoryContainer=document.getElementById('category-bar-container');

    data.data.news_category.forEach((item)=>{
        // console.log(item)
        // console.log(categoryContainer)
        const div=document.createElement('div');
        div.innerHTML=`
            <button onclick="loadNews()">${item.category_name}</button>
        `
        categoryContainer.appendChild(div)
    })
}

const loadNews=async(catId)=>{
    document.getElementById('head-spiner').style.display="block";
    const response=await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data=await response.json();
    const alldata=data.data;
    const newsContainer=document.getElementById('news-container');
    data.data.forEach((item)=>{
        document.getElementById('head-spiner').style.display="none";
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="card lg:card-side bg-base-100 shadow-xl">
        <h2>${item.title}</h2>
        <p>${item.rating.badge}:${item.rating.number}</p>
            <figure><img src="${item.image_url}" alt="Album"/></figure>
            <div class="card-body">
            <h2 class="card-title">${item.details.slice(0,200)}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
        <button  onclick="check('${item.title}')" class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
        `
        newsContainer.appendChild(div);
    })
}

const handleSearch=()=>{
    const value=document.getElementById('search-box').value;
    if(value){
        loadNews(value)
    }else{
        alert('please enter a valid id');
    }
}

const check=(text)=>{
    
}

loadNews("01")
loadCategory()
