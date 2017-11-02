var mapWrapper = require ('./map_wrapper')
globalMap = null;

var mapController = {
  displayMap: function(lat, lng){
    var mapContainer = document.getElementById("map");
    globalMap = new mapWrapper(mapContainer, {lat: lat, lng: lng}, 15 );
    console.log(globalMap, "from constructor");
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
