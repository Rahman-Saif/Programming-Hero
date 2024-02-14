function hideElementId(element){
    const elem=document.getElementById(element);
    elem.classList.add("hidden");
}

function showElementId(element){
    const elem=document.getElementById(element);
    elem.classList.remove("hidden");
}