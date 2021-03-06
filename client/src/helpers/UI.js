var displayWelcomeViews = require("../views/display_welcome_view.js");
var postCodeRequestHelper = require("./post_code_request_helper")
var weatherRequestHelper = require("./weather_request_helper")
var restaurantRequestHelper = require("./restaurant_request_helper")
var eventRequestHelper = require("./event_request_helper")
var pubDataHelper = require("./pub_data/pub_data_helper.js")
var favsDataHelper = require("./favs_helper.js")
var displayWeather = require("../views/display_weather.js")
var displayRestaurants = require("../views/display_restaurants.js")
var displayPubs = require("../views/display_pubs.js")
var displayEvents = require("../views/display_events.js")
var mapController = require("./map_controller")
var displayHelper = require("../views/display_helper.js")

// var NightOutEvent = require("../models/night_out_event.js")

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
      this.makeFavouritesButtonWork();

    }.bind(this))

    // request weather information
    weatherRequestHelper.getCurrentWeatherByPostCode(postCode, function(data) {
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
    mapController.removeAllMarkers();
    displayPubs.renderMarkers(pubList)
  }.bind(this));
}

UI.prototype.makeRestaurantsButtonWork = function() {
  var button = document.getElementById("restaurants-button")

  button.addEventListener("click", function(){
    var lat = this.coordinates.lat;
    var lng = this.coordinates.lng;
    restaurantRequestHelper.getRestaurantsByCoords(lat, lng, function(data){
      mapController.removeAllMarkers();
      displayRestaurants.renderMarkers(data.restaurants)
    }.bind(this))
  }.bind(this))
}

UI.prototype.makeEventsButtonWork = function() {
  var button = document.getElementById("events-button")

  button.addEventListener("click", function(){
    var lat = this.coordinates.lat
    var lng = this.coordinates.lng
    var radiusInMiles = 2
    var daysAhead = 1
    eventRequestHelper.getEventsByCoords(lat, lng, radiusInMiles, daysAhead, function (data){
      mapController.removeAllMarkers();
      displayEvents.renderMarkers(data)
    }.bind(this))
  }.bind(this))
}

UI.prototype.render = function () {
  this.makeWelcomeButtonWork();
};

UI.prototype.makeFavouritesButtonWork = function () {
  var button = document.getElementById("favorites-button")
  button.addEventListener("click", function(){
    var favsList = favsDataHelper.getAllFavs(function(modelObjectArray){
      mapController.removeAllMarkers()
      displayHelper.renderItems(modelObjectArray)
    }.bind(this))
  }.bind(this));
}

module.exports = UI;
