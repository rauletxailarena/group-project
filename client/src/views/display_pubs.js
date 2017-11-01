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
    var colourMarker = "public/markers/a_yellow_pub_marker.png"
    // create info window for the element
    var container = document.createElement("div")
    var nameHTML = document.createElement("h3")
    var addressHTML = document.createElement("p")
    var postcodeHTML = document.createElement("p")

    var button = document.createElement("button")
    button.addEventListener("click", function(eventObject){

      // Centralise it here
      var url = "http://localhost:3000/api/locations"
      var callback = function(postResponseData){
        console.log("Saved pub, with response:", postResponseData)
      }
      var payload = new Pub(pub)
      requestHelper.postRequest(url, callback, payload)

      // // Request code not centralised
      // console.log("button clicked", pub);
      // var xhr = new XMLHttpRequest()
      // xhr.open("POST", "http://localhost:3000/api/locations" )
      // xhr.setRequestHeader("Content-Type", "application/json")
      // xhr.addEventListener('load', function(){
      //   console.log("Saved object");
      // })
      // var modelObject = new Pub(pub)
      // var stringObject = JSON.stringify(modelObject)
      // console.log(stringObject);
      // xhr.send(stringObject);

      // // Request code centralised
      //
      // requestHelper.postRequest = function (url, callback, payload) {
      //   var xhr = new XMLHttpRequest()
      //   xhr.open('POST', url)
      //
      //   xhr.addEventListener('load', function () {
      //     if (xhr.status !== 200) return
      //     var jsonString = xhr.responseText
      //     var data = JSON.parse(jsonString)
      //     callback(data)
      //   })
      //
      //   xhr.setRequestHeader('Content-Type', 'application/json')
      //
      //   var jsonString = JSON.stringify(payload)
      //   xhr.send(jsonString)
      // }





    })
    button.textContent = "Add to my plan";

    nameHTML.textContent = pub.name;
    addressHTML.textContent = pub.address;
    postcodeHTML.textContent = pub.postcode;

    container.appendChild(nameHTML);
    container.appendChild(addressHTML);
    container.appendChild(postcodeHTML);
    container.appendChild(button)
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
