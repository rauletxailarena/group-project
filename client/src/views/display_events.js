var mapController = require("../helpers/map_controller.js")
var requestHelper = require("../helpers/request_helper.js")
var Event = require("../models/night_out_event.js")
var displayEvents = {

  renderMarker: function(event) {
    var colourMarker = "public/markers/a_blue_events_marker.png"
    // create info window for the element
    var container = document.createElement("div")
    var nameHTML = document.createElement("h3")
    var descriptionHTML = document.createElement("p")
    var venueHTML = document.createElement("p")
    var postcodeHTML = document.createElement("p")
    // var tagsHTML = document.createElement("p")

    nameHTML.textContent = event.name;
    descriptionHTML.textContent = event.description;
    venueHTML.textContent = event.venue;
    postcodeHTML.textContent = event.postcode;
    // tagsHTML.textContent = event.tags;

    var button = document.createElement("button")
    button.addEventListener("click", function(eventObject){
      var url = "http://localhost:3000/api/locations"
      var callback = function(postResponseData){
        console.log("Saved event, with response:", postResponseData)
      }
      var payload = event
      requestHelper.postRequest(url, callback, payload)
    })

    button.textContent = "Add to my plan";
    container.appendChild(nameHTML);
    container.appendChild(descriptionHTML);
    container.appendChild(venueHTML);
    // container.appendChild(tagsHTML);
    container.appendChild(postcodeHTML);
    container.appendChild(button);



    mapController.addColourMarker(event, colourMarker, container)
  },

  renderMarkers: function(eventsList){
    eventsList.forEach(function(apiEvent){
      var event = new Event(apiEvent)
      this.renderMarker(event)
      // console.log(event)
    }.bind(this));
  }

}


module.exports = displayEvents
