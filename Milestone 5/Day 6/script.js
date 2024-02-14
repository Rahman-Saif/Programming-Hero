const homeSection=document.querySelector("#home-screen");
const playSection=document.querySelector("#play-section");

function play(){
    // console.log(`play started now`);
    // // console.log(homeSection);
    // homeSection.classList.add("hidden");
    // playSection.classList.remove("hidden");
    hideElementId('home-screen');
    showElementId('play-section');

}

