var postCodeRequestHelper = require("./postCodeRequestHelper")
var weatherRequestHelper = require("./weather_request_helper")
var restaurantRequestHelper = require("./restaurant_request_helper")
var pubDataHelper = require("./pub_data/pubDataHelper.js")

var submitButton = {
  addFunctionality: function() {
    var button = document.getElementById("postcode-submit-button")
    var postcodeInput = document.getElementById("postcode-input")
    button.addEventListener("click", function() {
      var postcode = postcodeInput.value
      postCodeRequestHelper.getRequest(postcode, function(data) {
        console.log("City by postcode", data.result)

        restaurantRequestHelper.getRestaurantsByCoords(data.result.latitude, data.result.longitude, function(data) {
          console.log("restaurant info:", data)
        })

        var pubList = pubDataHelper.getPubsByCoords(data.result.latitude, data.result.longitude, 0.01)

        console.log("Pub list: ", pubList)

      })

      weatherRequestHelper.getCurrentWeatherByPostCode(postcode, function(data) {
        console.log("weather data:", data)
      })


    })
  }
}

module.exports = submitButton
