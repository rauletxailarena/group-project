var mapWrapper = require ('../helpers/mapWrapper')
var postCodeRequestHelper = require ('../helpers/postCodeRequestHelper.js')
var weatherRequestHelper = require ('../helpers/weather_request_helper.js')
var locationIdHelper = require('../helpers/location_id_helper.js')
var buttonListener = require('../helpers/make_submit_button_work.js')


window.addEventListener('load', function(){
  var mapContainer = document.getElementById("map");
  console.log(mapContainer);
  var map = new mapWrapper(mapContainer,
    {lat: 51.5074, lng: -0.1278}, 5 );
  map.addClickEvent();

  postCodeRequestHelper.getRequest("eh497sl", function(data){
    console.log(data);
  });
  postCodeRequestHelper.getRequest("eh111hd", function(data) {
    console.log(data);
  });

  buttonListener.addFunctionality();

  locationIdHelper.getCityIdByName("Glasgow", function(data){
    var cityId = data
    console.log("city id", data);
    weatherRequestHelper.getCurrentWeatherById(cityId, function(weatherData){
      console.log(weatherData);
    })
  })



});
