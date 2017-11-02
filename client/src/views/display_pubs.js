var mapController = require("../helpers/map_controller.js")
var requestHelper = require("../helpers/request_helper.js")
var Pub = require("../models/pub.js")


var displayPubs = {
  renderPub: function(pub) {
    var pubContainer = document.getElementById("pubs-info-container")
    var nameP = document.createElement("p")

    nameP.textContent = pub.name

    pubContainer.appendChild(nameP)
  },

  render: function(pubs) {
    this.resetRender()
    var pubContainer = document.getElementById("pubs-info-container")
    var title = document.createElement("h2")
    title.textContent = "Pubs info:"
    pubContainer.appendChild(title)

    pubs.forEach(function(pub) {
      this.renderPub(pub)
    }.bind(this))
  },

  resetRender: function(){
    var pubContainer = document.getElementById("pubs-info-container")
    pubContainer.innerHTML = ""
  },

  renderMarker: function(pub) {
    console.log("Render marker on a pub")
    var colourMarker = "public/markers/a_yellow_pub_marker.png"
    // create info window for the element
    var container = document.createElement("div")
    var nameHTML = document.createElement("h3")
    var addressHTML = document.createElement("p")
    var postcodeHTML = document.createElement("p")

    var saveButton = document.createElement("button")
    saveButton.addEventListener("click", function(eventObject){
      var url = "http://localhost:3000/api/locations"
      var callback = function(postResponseData){
        console.log("Saved pub, with response:", postResponseData)
      }
      var payload = pub
      requestHelper.postRequest(url, callback, payload)
    })
    saveButton.textContent = "Add to my plan";

    var mongoId = pub["_id"]
    if (mongoId) {
      var deleteButton = document.createElement("button")
      deleteButton.addEventListener("click", function(eventObject){
        var url = "http://localhost:3000/api/locations" + "/" + mongoId
        var callback = function(postResponseData){
          console.log("Deleted pub, with response:", postResponseData)
        }
        requestHelper.deleteRequest(url, callback)
      })
      deleteButton.textContent = "Remove from my plan";
    }

    nameHTML.textContent = pub.name;
    addressHTML.textContent = pub.address;
    postcodeHTML.textContent = pub.postcode;

    container.appendChild(nameHTML);
    container.appendChild(addressHTML);
    container.appendChild(postcodeHTML);
    container.appendChild(saveButton)
    if (mongoId) {
      container.appendChild(deleteButton)
    }
    // container.appendChild(form)

    mapController.addColourMarker(pub, colourMarker, container)
  },

  renderMarkers: function(pubList){
    pubList.forEach(function(apiPub){
      var pub = new Pub(apiPub)
      this.renderMarker(pub)
    }.bind(this))
  }

}


module.exports = displayPubs
