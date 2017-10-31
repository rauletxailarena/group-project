var mapController = require("../helpers/map_controller.js")

var displayEvents = {

  renderMarkers: function(eventsList){
    var colourMarker = "public/markers/yellow_markerA.png"
    eventsList.forEach(function(event){
      mapController.addColourMarker(event, colourMarker)
    });
  }
}


module.exports = displayEvents
