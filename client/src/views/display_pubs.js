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

  renderMarkers: function(pubList){
    var colourMarker = "public/markers/blue_markerA.png"
    pubList.forEach(function(pub){
      mapController.addColourMarker(pub, colourMarker)
    })
  }

}


module.exports = displayPubs
