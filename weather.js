// @TO-DO: hide apiKey
class Weather {
    constructor(city, state) {
      this.apiKey = '3cd972ebcc8eae11d233fd18b9f3e3dd';
      this.city = city;
      this.state = state;
    }
  
    // Fetch weather from API
    async getWeather() {
    //   const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseImperial = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},us-${this.state}&units=imperial&appid=${this.apiKey}`);

        const responseMetric = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},us-${this.state}&units=metric&appid=${this.apiKey}`);

        //   console.log(response.json());

        const imperial = await responseImperial.json();
        const metric = await responseMetric.json();
  
        return ({
            imperial,
            metric
        });
    }
  
    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
}