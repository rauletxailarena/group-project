var mapController = require("../helpers/map_controller.js")

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
    var colourMarker = "public/markers/a_purple_pub_marker.png"
    // create info window for the element
    var container = document.createElement("div")
    var nameHTML = document.createElement("h3")
    var addressHTML = document.createElement("p")
    var postcodeHTML = document.createElement("p")

    nameHTML.textContent = pub.name;
    addressHTML.textContent = pub.address;
    postcodeHTML.textContent = pub.postcode;

    container.appendChild(nameHTML);
    container.appendChild(addressHTML);
    container.appendChild(postcodeHTML);

    mapController.addColourMarker(pub, colourMarker, container)
  },

  renderMarkers: function(pubList){
    pubList.forEach(function(pub){
      this.renderMarker(pub)
    }.bind(this))
  }

}


module.exports = displayPubs
