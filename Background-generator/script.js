var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function backgroundText(){
    css.textContent = body.style.background + ";" ;
}

function changeBodyBackground(){
    body.style.background = 
                        "linear-gradient(to right, "
                        +color1.value
                        +", "
                        +color2.value
                        +")";
    backgroundText();
}

function getRandomColors(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() *16)];
    }
    console.log(color);
    return color;
}

function changeToRandomColor(){
    color1.value = getRandomColors();
    color2.value = getRandomColors();

    changeBodyBackground();
}
changeBodyBackground();

color1.addEventListener("input",changeBodyBackground);

color2.addEventListener("input",changeBodyBackground);

random.addEventListener("click",changeToRandomColor);