
async function loadData(){
    const res=await fetch('');
    const data=await res.json();
    console.log(data);
}

loadData()

const taskLoader=async()=>{
    const res=await fetch('');
}