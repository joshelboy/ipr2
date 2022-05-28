var apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
fetch(apiUrl).then(response => {
return response.json();
}).then(data => {
    // Work with JSON data here
    console.log(data);
    document.getElementById('latitude').innerHTML = data.latitude;
    document.getElementById('longitude').innerHTML = data.longitude;
    var map = L.map('map').setView([data.latitude, data.longitude], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap; Benjamin Schäfer, Elias Tilegant'
    }).addTo(map);
    var marker = L.marker([data.latitude, data.longitude]).addTo(map);
}).catch(err => {
    // Do something for an error here
});
