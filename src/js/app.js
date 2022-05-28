import { locate } from "./iss.js";
import { get_weather } from "./meteo.js";
import { draw_history, draw_marker, render } from "./osm.js";

function draw(){
    locate().then((res) => {
        let latitude = res.latitude;
        let longitude = res.longitude;
        let altitude = res.altitude * 1000;

        draw_history(latitude, longitude);
        draw_marker(latitude, longitude);
        get_weather(latitude, longitude, altitude)
    });
}

function initial(){
    console.log("If you can see this you are truly a developer! Or trying to find vulnerabilities")
    render();
    draw();
}

function refresh(){
    draw();
}

initial()
window.setInterval(function() {
    refresh()
  }, 10000)