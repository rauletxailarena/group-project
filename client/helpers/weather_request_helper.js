var hiddenApiKey = require('./weather_api_key.js')

var weatherRequestHelper = {
  tempUrl: "http://www.myweather2.com/developer/forecast.ashx?uac=" + hiddenApiKey
  + "&output=json&query=" ,


  getCurrentWeatherById: function(postcode, callback) {
     var url = this.tempUrl + postcode
     console.log("weather url:", url);
     var xhr = new XMLHttpRequest()
     xhr.open("GET", url)

     xhr.addEventListener("load", function() {
       console.log(xhr)
       var jsonString = xhr.responseText
       var data = JSON.parse(jsonString)
       callback(data.weather.curren_weather[0])
     })
     xhr.send()
  }
}

  // weatherRequestHelper.getCurrentWeatherById("eh11 1hd", function(data) {
  //   console.log("Weather request helper called: ",data);
  // })


module.exports = weatherRequestHelper
