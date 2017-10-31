var mapWrapper = require ('./helpers/map_wrapper')
var postCodeRequestHelper = require ('./helpers/post_code_request_helper.js')
var weatherRequestHelper = require ('./helpers/weather_request_helper.js')
var restaurantRequestHelper = require('./helpers/restaurant_request_helper.js')
var makeWelcomeButtonWork = require('./helpers/make_welcome_button_work.js')
var eventsHelper = require('./helpers/events_helper.js')
var makeRestaurantsButtonWork = require('./helpers/make_restaurants_button_work.js')
var makePubsButtonWork = require('./helpers/make_Pubs_button_work.js')
var makeEventsButtonWork = require('./helpers/make_events_button_work.js')
var doInitialActions = require('./helpers/do_initial_actions.js')
var UI = require('./helpers/UI.js')

window.addEventListener('load', function(){

  // Make the stuff on the page work properly
  // makeWelcomeButtonWork();
  // makeRestaurantsButtonWork();
  // makePubsButtonWork();
  // makeEventsButtonWork();

  // Do some stuff before SUBMIT is pressed
  doInitialActions();
  var ui = new UI();
  ui.render()


  // buttonListener.addFunctionality(function(pubList, data) {
  //   var centerLatitude = parseFloat(data.result.latitude);
  //   var centerLongitude = parseFloat(data.result.longitude);
  //   var center = {lat: centerLatitude, lng: centerLongitude};
  //   // console.log("Coordinates to center", center);
  //   map.moveMapToCurrentLocation(center);
  //
  //   for(var pub of pubList) {
  //     var coordinates = {
  //       lat: parseFloat(pub.latitude),
  //       lng: parseFloat(pub.longitude)
  //     }
  //     map.addMarker(coordinates);
  //   }
  // });





});
