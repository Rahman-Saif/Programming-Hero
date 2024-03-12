// localStorage.setItem(`userID`,1011)

const addToLocalStorage=()=>{
    const input=document.getElementById('storage-id');
    const id=input.value;
    const valueinput=document.getElementById('storage-value');
    const value=valueinput.value;

    localStorage.setItem(id,value)
    input.value='';
    valueinput.value='';
}