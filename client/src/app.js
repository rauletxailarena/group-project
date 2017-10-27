var mapWrapper = require ('../helpers/mapWrapper')
var postCodeRequestHelper = require ('../helpers/postCodeRequestHelper.js')
var weatherRequestHelper = require ('../helpers/weather_request_helper.js')

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

    weatherRequestHelper.getRequest(3066, function(data) {
      console.log(data);
    })



  });
