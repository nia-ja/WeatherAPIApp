class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure= document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }
  
    paint(weather, city, state) {
        this.location.textContent = `${city}, ${state}`;
        this.desc.textContent = weather.imperial.weather[0].description;
        this.string.textContent = `${weather.imperial.main.temp} F (${weather.metric.main.temp} C)`;

        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.imperial.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Humidity: ${weather.imperial.main.humidity} %`;
        this.feelsLike.textContent = `Feels Like: ${weather.imperial.main.feels_like} F (${weather.metric.main.feels_like} C)`;
        this.pressure.textContent = `Pressure: ${weather.imperial.main.pressure} hPa`;
        this.wind.textContent = `Wind: ${weather.imperial.wind.speed} MPH (${weather.metric.wind.speed} m/s), gusting to ${weather.imperial.wind.gust} MPH (${weather.metric.wind.gust} m/s)`;
    }
}