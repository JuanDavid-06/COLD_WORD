 

function getMap(latitude,longitude){
    let map = l.map('map').setView({latitude,longitude}, 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([  8.94403,-75.43868]).addTo(map) .bindPopup('Tu estas .<br> AQUI.').openPopup();
}