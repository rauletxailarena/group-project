var mapWrapper = require ('./map_wrapper')
var map;

var mapController = {
  displayMap: function(lat, lng){
    var mapContainer = document.getElementById("map");
    map = new mapWrapper(mapContainer, {lat: lat, lng: lng}, 15 );
  },
  addColourMarker: function(item, marker, infoWindow){
    var pubIcon = marker
    var latitude = parseFloat(item.latitude);
    var longitude = parseFloat(item.longitude);
    var coords = {lat: latitude, lng: longitude};
    map.addMarker(coords, marker, infoWindow);
  }
}



module.exports = mapController
