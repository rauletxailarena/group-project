var mapWrapper = require ('../helpers/map_wrapper')
var postCodeRequestHelper = require ('../helpers/post_code_request_helper.js')
var weatherRequestHelper = require ('../helpers/weather_request_helper.js')
var buttonListener = require('../helpers/make_submit_button_work.js')
var restaurantRequestHelper = require('../helpers/restaurant_request_helper.js')

window.addEventListener('load', function(){
  var mapContainer = document.getElementById("map");
  console.log(mapContainer);
  var map = new mapWrapper(mapContainer,
    {lat: 55.939014, lng: -3.218400}, 15 );
  map.addClickEvent();


  buttonListener.addFunctionality(function(pubList) {
    console.log("publist callback: ", pubList);
    for(var pub of pubList) {
      var coordinates = {
        lat: parseInt(pub.latitude),
        lng: parseInt(pub.longitude)
      }
      var lat = parseInt(pub.latitude)
      console.log("lat: ", pub.latitude);
      var lng = parseInt(pub.longitude)
      console.log("lng: ", pub.longitude);
      map.addMarker(coordinates)
    }
  });





});
