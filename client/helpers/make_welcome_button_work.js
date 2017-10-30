var displayWelcomeViews = require("../src/views/display_welcome_view.js");
var postCodeRequestHelper = require("./post_code_request_helper")
var weatherRequestHelper = require("./weather_request_helper")
var restaurantRequestHelper = require("./restaurant_request_helper")
var pubDataHelper = require("./pub_data/pub_data_helper.js")
var displayWeather = require("../src/views/display_weather.js")
var displayRestaurants = require("../src/views/display_restaurants.js")
var displayPubs = require("../src/views/display_pubs.js")
var mapController = require("./map_controller")

var makeWelcomeButtonWork = function(){

  var button = document.getElementById("welcome-input-button")

  button.addEventListener("click", function(){


    // Grab the value of hte welcome input field
    var postCodeField = document.getElementById("welcome-input")
    console.log("postCode field", postCodeField);
    var postCode = postCodeField.value

    // remove welcome elements
    displayWelcomeViews.removeWelcome();
    console.log("requesting info for postcode:", postCode);


    // requeste postCode data
    postCodeRequestHelper.getRequest(postCode, function(data) {

      // display map
      console.log(data);
      mapController.displayMap(data.result.latitude, data.result.longitude)

      // make request for restaurants
      restaurantRequestHelper.getRestaurantsByCoords(data.result.latitude, data.result.longitude, function(data) {
        console.log("restaurant info:", data.restaurants)
        // displayRestaurants.render(data.restaurants)
      })

      // make request for pubs
      var pubList = pubDataHelper.getPubsByCoords(data.result.latitude, data.result.longitude, 0.01)
      console.log("Pub list: ", pubList)
      // displayPubs.render(pubList)
    })

    // request weather information
    weatherRequestHelper.getCurrentWeatherByPostCode(postCode, function(data) {
      // displayWeather.render(data);
    })
  })
}


module.exports = makeWelcomeButtonWork;
