import { locate } from "./iss.js";
import { draw_marker, render } from "./osm.js";

function initial(){
    console.log("If you can see this you are truly a developer! Or trying to find vulnerabilities")
    render();
    locate().then((res) => draw_marker(res.latitude, res.longitude));
}

function second(){
    locate().then((res) => draw_marker(res.latitude, res.longitude));
}

initial()
window.setInterval(function() {
    second()
  }, 10000)