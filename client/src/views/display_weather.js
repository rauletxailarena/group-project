var display_weather = {
  render : function(weatherObject){
    var weatherContainer = document.getElementById("weather-info-container");
    var weatherText = weatherObject.weather_text;
    var weatherTemp = weatherObject.temp;
    var weatherWind = weatherObject.wind[0].speed;

    var textP = document.createElement("p");
    textP.textContent = "Weather: " + weatherText;
    var tempP = document.createElement("p");
    tempP.textContent = "Tempereature: " + weatherTemp;
    var windP = document.createElement("p");
    windP.textContent = "Wind speed: " + weatherWind;

    weatherContainer.appendChild(textP)
    weatherContainer.appendChild(tempP)
    weatherContainer.appendChild(windP)
  }
}

module.exports = display_weather;
