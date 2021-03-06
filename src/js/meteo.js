//Teammitglieder: Elias Tilegant, Benjamin Schäfer

export function get_weather(latitude, longitude, height){
    try{
        return new Promise((resolve, reject) => {
            var apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&current_weather=true';
            fetch(apiUrl).then(response => {
                return response.json();
            }).then(data => {
                let temperature = data.current_weather.temperature;
                let temp_height = data.elevation;
                height = height - temp_height;
                height = height / 1000;
                height = height.toFixed(2)

                document.getElementById('height').innerHTML = height;
                document.getElementById('weather').innerHTML = temperature;
                resolve(data);
            }).catch(err => {
                reject("Error")
            });
        });
    } catch (err) {
        console.log("API Rate-Limit or Server Error")
    }
}