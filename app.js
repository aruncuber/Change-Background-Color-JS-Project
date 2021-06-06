let colors = document.getElementById("colors");

const button = document.querySelector("button");

button.addEventListener("click",function(){
   colorTheme();    
});


let colorTheme = () => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let changingColors = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = changingColors;
    colors.innerText = changingColors;
}