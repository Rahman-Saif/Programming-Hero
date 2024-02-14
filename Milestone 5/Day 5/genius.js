/*


*/
function calculateTriangle(){
    const triangleBaseInput=document.querySelector("#triangle-base");
    const triangleBaseText=triangleBaseInput.value;
    const base=parseFloat(triangleBaseText)

    const triangleHeightInput=document.querySelector("#triangle-height");
    const triangleHeightText=triangleHeightInput.value;
    const height=parseFloat(triangleHeightText)
    
    const area=0.5*base*height;
    
    const displayArea=document.getElementById("triangle-area");
    displayArea.innerText=area;
}

// function calculateRectangle(){
//     const rectangleBaseInput=document.querySelector("#rectangle-base");
//     const rectangleBaseText=rectangleBaseInput.value;
//     const base=parseFloat(rectangleBaseText)

//     const rectangleHeightInput=document.querySelector("#rectangle-height");
//     const rectangleHeightText=rectangleHeightInput.value;
//     const height=parseFloat(rectangleHeightText)
    
//     const area=0.5*base*height;
    
//     const displayArea=document.getElementById("rectaangle-area");
//     displayArea.innerText=area;
// }

function calculateRectangle(){
    const base=getInputValueById('rectangle-base')
    const height=getInputValueById('rectangle-height');
    const area=base*height;
    setInnerTextById("rectangle-area",area);
    
}

function getInputValueById(parameter){
    const inputField=document.getElementById(parameter);
    const inputValueText=inputField.value;
    const inputValue=parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}