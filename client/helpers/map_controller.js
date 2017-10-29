var mapController = {
  displayMap: function(){
    var mapWrapper = require ('./map_wrapper')
    var mapContainer = document.getElementById("map");
    var map = new mapWrapper(mapContainer, {lat: 55.939014, lng: -3.218400}, 15 );
  }
}

module.exports = mapController
