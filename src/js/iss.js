export function locate(){
    try{
        return new Promise((resolve, reject) => {
            var apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
            fetch(apiUrl).then(response => {
                return response.json();
            }).then(data => {
                document.getElementById('latitude').innerHTML = data.latitude;
                document.getElementById('longitude').innerHTML = data.longitude;
                resolve(data);
            }).catch(err => {
                reject("Error")
            });
        });
    } catch (err) {
        console.log("ISS couldnt be located. Maybe API Rate-Limit or Server Error")
    }
}