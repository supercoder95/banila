const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}
 
function handleError(){
    console.log('Can not Access geo location.')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleError)
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{

    }
}


function init(){
    loadCoords();
}

init();