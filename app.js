// Init storage Object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init ui Object
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    // @TO-DO: Clean modal form fields

    weather.changeLocation(city, state);

    // set local storage Data
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close Modal 
    $("#locModal").modal("hide");

});

function getWeather(){
  weather.getWeather()
    .then((results) => {
      console.log(results, weather.city, weather.state);
      ui.paint(results, weather.city, weather.state);
    })
    // Handle errors more user friendly
    .catch(err => console.log(err));
}