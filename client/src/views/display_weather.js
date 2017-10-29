var display_weather = {
  render : function(weatherObject){
    this.resetRender()
    var weatherContainer = document.getElementById("weather-info-container");
    var weatherText = weatherObject.weather_text;
    var weatherTemp = weatherObject.temp;
    var weatherWind = weatherObject.wind[0].speed;
    var title = document.createElement("h2")

    var textP = document.createElement("p");
    textP.textContent = "Weather: " + weatherText;
    var tempP = document.createElement("p");
    tempP.textContent = "Tempereature: " + weatherTemp;
    var windP = document.createElement("p");
    windP.textContent = "Wind speed: " + weatherWind;
    title.textContent = "Weather info:"

    weatherContainer.appendChild(title)
    weatherContainer.appendChild(textP)
    weatherContainer.appendChild(tempP)
    weatherContainer.appendChild(windP)
  },
  resetRender: function(){
    var weatherContainer = document.getElementById("weather-info-container")
    weatherContainer.innerHTML = ""
  }
}

module.exports = display_weather;
