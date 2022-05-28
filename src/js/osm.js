export async function render(map){
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

export function draw_marker(latitude, longitude, map){
    try{
        var marker = L.marker([latitude, longitude]).addTo(map)
    } catch (err) {
        console.log("Marker couldn't be added to map instance.")
    }
}