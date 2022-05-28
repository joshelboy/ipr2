import { locate } from "./iss.js";
import { draw_marker, render } from "./osm.js";

async function initial(){
    render(map);
    locate().then((res) => draw_marker(res.latitude, res.longitude, map));
}

var map = L.map('map').setView([40.736111, 34.473889], 2);
initial()