const clockContainer = document.querySelector(".js-clock"); 
const clockTitle = clockContainer.querySelector("h1");  

function getTime(){
    const date = new Date();
    const minutes = date. getMinutes();
    const second = date.getSeconds();
    const hours = date.getHours();
    clockTitle.innerText  = `${
        hours < 10 ? `0${hours}`: hours
    }:${
        minutes < 10 ? `0${minutes}`: minutes
    }:${
        second < 10 ? `0${second}` : second
    }`; 
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();