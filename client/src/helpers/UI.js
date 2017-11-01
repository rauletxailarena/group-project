var displayWelcomeViews = require("../views/display_welcome_view.js");
var postCodeRequestHelper = require("./post_code_request_helper")
var weatherRequestHelper = require("./weather_request_helper")
var restaurantRequestHelper = require("./restaurant_request_helper")
var eventsHelper = require("./events_helper")
var pubDataHelper = require("./pub_data/pub_data_helper.js")
var displayWeather = require("../views/display_weather.js")
var displayRestaurants = require("../views/display_restaurants.js")
var displayPubs = require("../views/display_pubs.js")
var mapController = require("./map_controller")


var Restaurant = require("../models/restaurant.js")

var UI = function(){
  this.coordinates = {};
}

UI.prototype.makeWelcomeButtonWork = function(){

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
      console.log("coords", coords);
      this.coordinates = coords;
      this.makePubsButtonWork();
      this.makeRestaurantsButtonWork();
      this.makeEventsButtonWork();

    }.bind(this))

    // request weather information
    weatherRequestHelper.getCurrentWeatherByPostCode(postCode, function(data) {
      console.log(data);
      displayWeather.render(data)
    })
  }.bind(this))
}

UI.prototype.makePubsButtonWork = function () {
  var button = document.getElementById("pubs-button")

  button.addEventListener("click", function(){
    var lat = this.coordinates.lat;
    var lng = this.coordinates.lng;
    var pubList = pubDataHelper.getPubsByCoords(lat, lng, 0.01)
    displayPubs.renderMarkers(pubList)
  }.bind(this));
}

UI.prototype.makeRestaurantsButtonWork = function() {
  var button = document.getElementById("restaurants-button")

  button.addEventListener("click", function(){
    var lat = this.coordinates.lat;
    var lng = this.coordinates.lng;
    restaurantRequestHelper.getRestaurantsByCoords(lat, lng, function(data){
      console.log(data.restaurants);
      displayRestaurants.renderMarkers(data.restaurants)

      var apiObject = data.restaurants[0]
      var modelObject = new Restaurant(apiObject)
      var jsonString = JSON.stringify(modelObject)
      var jsonObject = JSON.parse(jsonString)
      console.log("api object: ", apiObject);
      console.log("model object: ", modelObject);
      console.log("json string: ", jsonString);
      console.log("json object: ", jsonObject);

      console.log("render markers called");
    }.bind(this))
  }.bind(this))
}

UI.prototype.makeEventsButtonWork = function() {
  var button = document.getElementById("events-button")

  button.addEventListener("click", function(){
    var lat = this.coordinates.lat;
    var lng = this.coordinates.lng;
    eventsHelper.getRequest( function (data){
      console.log("All events", data)
    }.bind(this))
  }.bind(this))
}

UI.prototype.render = function () {
  this.makeWelcomeButtonWork();
};




module.exports = UI;
