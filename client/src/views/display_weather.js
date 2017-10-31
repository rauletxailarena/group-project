var display_weather = {
  render : function(weatherObject){
    var weatherText = document.getElementById("weather-text");
    var weatherTemp = document.getElementById("temperature-text");
    var weatherWind = document.getElementById("wind-text");


    weatherText.textContent = weatherObject.weather_text;
    weatherTemp.textContent = weatherObject.temp + "°C";
    weatherWind.textContent = weatherObject.wind[0].speed + "kph";
  }
}

module.exports = display_weather;
