const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(ImgNumber){
    const image = new Image();
    image.src = `${ImgNumber +1}.jpg`;
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();


