function iniciarMap(){
    var coord = {lat: 8.943987384654239, lng: -75.43312137824735};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map})
}