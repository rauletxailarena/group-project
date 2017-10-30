var mapWrapper = require ('../helpers/map_wrapper')
var postCodeRequestHelper = require ('../helpers/post_code_request_helper.js')
var weatherRequestHelper = require ('../helpers/weather_request_helper.js')
var buttonListener = require('../helpers/make_submit_button_work.js')
var restaurantRequestHelper = require('../helpers/restaurant_request_helper.js')
var makeWelcomeButtonWork = require('../helpers/make_welcome_button_work.js')
var eventsHelper = require('../helpers/events_helper.js')

window.addEventListener('load', function(){

  makeWelcomeButtonWork();

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
