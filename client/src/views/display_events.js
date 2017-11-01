var mapController = require("../helpers/map_controller.js")

var displayEvents = {

  renderMarker: function(event) {
    var colourMarker = "public/markers/a_purple_events_marker.png"
    // create info window for the element
    var container = document.createElement("div")
    var nameHTML = document.createElement("h3")
    var descriptionHTML = document.createElement("p")
    var venueHTML = document.createElement("p")
    var postcodeHTML = document.createElement("p")
    var tagsHTML = document.createElement("p")

    nameHTML.textContent = pub.name;
    addressHTML.textContent = pub.address;
    postcodeHTML.textContent = pub.postcode;

    container.appendChild(nameHTML);
    container.appendChild(addressHTML);
    container.appendChild(postcodeHTML);

    mapController.addColourMarker(event, colourMarker)
  },

  renderMarkers: function(eventsList){
    eventsList.forEach(function(event){
      this.renderMarker(event)
    }.bind(this));
  }

}


module.exports = displayEvents
