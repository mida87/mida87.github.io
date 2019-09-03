var css = document.querySelector('h3');
var colorStart = document.querySelector('.color-start');
var colorEnd = document.querySelector('.color-end');
var body = document.querySelector('body');
var randomBtn = document.getElementById('randomize-btn');

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
        + colorStart.value
        + ","
        + colorEnd.value
        + ")";

    css.textContent = body.style.background + ";";
}

colorStart.addEventListener('input', setGradient);

colorEnd.addEventListener('input', setGradient);

setGradient();

function randomizeBackground() {
    colorStart.value = generateRandomHexColor();
    colorEnd.value = generateRandomHexColor();
    setGradient();
}

function generateRandomHexColor() {
    return  "#" + Math.floor(Math.random() * 255).toString(16).padStart(2, "0")
    + Math.floor(Math.random() * 255).toString(16).padStart(2, "0")
    + Math.floor(Math.random() * 255).toString(16).padStart(2, "0");
}

randomBtn.addEventListener('click', randomizeBackground);