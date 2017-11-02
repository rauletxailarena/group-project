var MapWrapper = require ('./map_wrapper')
globalMap = null  // Global variable!

var mapController = {
  displayMap: function(lat, lng){
    var mapContainer = document.getElementById("map");
    globalMap = new MapWrapper(mapContainer, {lat: lat, lng: lng}, 15 );
    globalMap.addClickEvent()
  },
  addColourMarker: function(item, marker, infoWindow){
    var pubIcon = marker
    var latitude = parseFloat(item.latitude);
    var longitude = parseFloat(item.longitude);
    var coords = {lat: latitude, lng: longitude};
    globalMap.addMarker(coords, marker, infoWindow);
  },
  removeAllMarkers: function(){
    if (globalMap !== undefined){
      globalMap.markers.forEach(function(marker){

        marker.setMap(null)
    })
    }
  }
}



module.exports = mapController
