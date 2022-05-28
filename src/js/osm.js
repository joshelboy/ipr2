//Teammitglieder: Elias Tilegant, Benjamin Schäfer

var marker;
var map = L.map('map').setView([40.736111, 34.473889], 2); //"Center" of the world
var pointList = [];
var line;

export async function render(){
    try {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 2,
            attribution: '© OpenStreetMap; Benjamin Schäfer, Elias Tilegant'
        }).addTo(map);
        
    } catch (err) {
        console.log("Error while initial OSM render");
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
        console.log("Marker couldn't be added to map instance.");
    }
}

export function draw_history(latitude, longitude){
    
    if (line != undefined){
        line.remove(map);
    }

    //If data record hits 240 minute limit (1 Call every 10 seconds == 6 Calls per Minute * 10 * 6 *4 = 1440)
    if (pointList.length == 1440){
        pointList.shift();
    }
    
    let new_location = new L.LatLng(latitude, longitude);
    pointList.push(new_location);
    line = new L.Polyline(pointList, {
        color: 'red',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    line.addTo(map);
}