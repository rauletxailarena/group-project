var mapController = {
  displayMap: function(lat, lng){
    var mapWrapper = require ('./map_wrapper')
    var mapContainer = document.getElementById("map");
    var map = new mapWrapper(mapContainer, {lat: lat, lng: lng}, 15 );
  }
}

module.exports = mapController
