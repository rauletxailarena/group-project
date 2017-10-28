var mapWrapper = require ('../helpers/mapWrapper')
var postCodeRequestHelper = require ('../helpers/postCodeRequestHelper.js')
var weatherRequestHelper = require ('../helpers/weather_request_helper.js')
<<<<<<< HEAD
var buttonListener = require ('../helpers/make_submit_button_work.js')
=======
var locationIdHelper = require ('../helpers/location_id_helper.js')
>>>>>>> 2cb6674a0dd127528721dd823c380f1add962178

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

    weatherRequestHelper.getRequest(3066, function(data) {
      console.log(data);
    })

  });
