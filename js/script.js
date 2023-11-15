 
 const map = L.map('map').setView([8.94411,-75.43870], 17);
              
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([8.94411,-75.43870]).addTo(map)
        .bindPopup('COLD WORLD')
        .openPopup();
