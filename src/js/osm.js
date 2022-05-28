var marker;
var map = L.map('map').setView([40.736111, 34.473889], 2); //"Center" of the world

export async function render(){
    try {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 2,
            attribution: '© OpenStreetMap; Benjamin Schäfer, Elias Tilegant'
        }).addTo(map);
        
    } catch (err) {
        console.log("Error while initial OSM render")
    }
}
export function draw_marker(latitude, longitude){
    try{
        if (marker != undefined){
            map.removeLayer(marker);
        }
        marker = L.marker([latitude, longitude]);
        map.addLayer(marker);
    } catch (err) {
        console.log("Marker couldn't be added to map instance.")
    }
}