var mapController = require("../helpers/map_controller.js")
var requestHelper = require("../helpers/request_helper.js")
var NightOutEvent = require("../models/night_out_event.js")

var displayEvents = {

  renderMarker: function(nightOutEvent) {
    var colourMarker = "public/markers/a_blue_events_marker.png"
    // create info window for the element
    var container = document.createElement("div")
    var nameHTML = document.createElement("h3")
    var descriptionHTML = document.createElement("p")
    var venueHTML = document.createElement("p")
    var postcodeHTML = document.createElement("p")
    // var tagsHTML = document.createElement("p")

    nameHTML.textContent = nightOutEvent.name;
    descriptionHTML.textContent = nightOutEvent.description;
    venueHTML.textContent = nightOutEvent.venue;
    postcodeHTML.textContent = nightOutEvent.postcode;
    // tagsHTML.textContent = nightOutEvent.tags;

    container.appendChild(nameHTML);
    container.appendChild(descriptionHTML);
    container.appendChild(venueHTML);
    // container.appendChild(tagsHTML);
    container.appendChild(postcodeHTML);

    if (nightOutEvent.canAdd()) {
      var saveButton = document.createElement("button")
      saveButton.addEventListener("click", function(eventObject){
        globalMap.closeCurrentInfoWindow()
        var url = "http://localhost:3000/api/locations"
        var callback = function(postResponseData){
          console.log("Saved event, with response:", postResponseData)
        }
        var payload = nightOutEvent
        requestHelper.postRequest(url, callback, payload)
      })
      saveButton.textContent = "Add to my plan";
      container.appendChild(saveButton);
    }

    if (nightOutEvent.canRemove()) {
      var mongoId = nightOutEvent["_id"]
      var deleteButton = document.createElement("button")
      deleteButton.addEventListener("click", function(eventObject){
        globalMap.closeCurrentInfoWindow()
        var url = "http://localhost:3000/api/locations" + "/" + mongoId
        var callback = function(postResponseData){
          console.log("Deleted event, with response:", postResponseData)
        }
        requestHelper.deleteRequest(url, callback)
      })
      deleteButton.textContent = "Remove from my plan";
      container.appendChild(deleteButton)
    }

    mapController.addColourMarker(nightOutEvent, colourMarker, container)
  },

  renderMarkers: function(eventsList){
    eventsList.forEach(function(apiEvent){
      var nightOutEvent = new NightOutEvent(apiEvent)
      this.renderMarker(nightOutEvent)
      // console.log(nightOutEvent)
    }.bind(this));
  }

}


module.exports = displayEvents
