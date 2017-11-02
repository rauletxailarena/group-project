var hiddenApiKey = require('./keys/weather_api_key.js')
var requestHelper = require('./request_helper.js')

// IMPROVEMENT: Need to escape out illegal characters such as spaces
// in the postcode, in order that they reach the weather API successfully

var weatherRequestHelper = {

  getCurrentWeatherByPostCode: function(postcode, callback) {
    var url = "http://www.myweather2.com/developer/forecast.ashx"
      + "?uac=" + hiddenApiKey
      + "&output=json"
      + "&query=" + postcode
    // console.log("weather url:", url);
    // console.log("New weather")
    var headerArray = []
    requestHelper.getRequestWithHeaders(url, headerArray, function(data){
      console.log("Weather data", data)
      callback(data.weather.curren_weather[0])
    })
  }

}

module.exports = weatherRequestHelper
