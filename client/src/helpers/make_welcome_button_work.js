var displayWelcomeViews = require("../views/display_welcome_view.js");
var postCodeRequestHelper = require("./post_code_request_helper")
var weatherRequestHelper = require("./weather_request_helper")
var restaurantRequestHelper = require("./restaurant_request_helper")
var pubDataHelper = require("./pub_data/pub_data_helper.js")
var displayWeather = require("../views/display_weather.js")
var displayRestaurants = require("../views/display_restaurants.js")
var displayPubs = require("../views/display_pubs.js")
var mapController = require("./map_controller")

var makeWelcomeButtonWork = function(){

  var button = document.getElementById("welcome-input-button")

  button.addEventListener("click", function(){


    // Grab the value of the welcome input field
    var postCodeField = document.getElementById("welcome-input")
    var postCode = postCodeField.value

    // remove welcome elements
    displayWelcomeViews.renderInformationScreen();

    // requeste postCode data
    postCodeRequestHelper.getRequest(postCode, function(data) {
      // Setup variables
      var lat = data.result.latitude
      var lng = data.result.longitude

      // display map
      mapController.displayMap(lat, lng)

      // save coords into UI
      var coords = {lat: lat, lng: lng}

      // // make request for pubs
      // var pubList = pubDataHelper.getPubsByCoords(lat, lng, 0.01)
      // console.log("Pubs", pubList);
      // displayPubs.renderMarkers(pubList);
      // // displayPubs.render(pubList)
    })

    // request weather information
    weatherRequestHelper.getCurrentWeatherByPostCode(postCode, function(data) {
      console.log(data);
      displayWeather.render(data)
    })
  })
}

module.exports = makeWelcomeButtonWork;
