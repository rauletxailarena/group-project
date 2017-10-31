var mapController = require("../helpers/map_controller.js")

var displayRestaurants = {
  renderRestaurant: function(restaurant) {
    var restaurantContainer = document.getElementById("restaurants-info-container")
    var nameP = document.createElement("p")
    var cuisineP = document.createElement("p")

    nameP.textContent = restaurant.restaurant.name
    cuisineP.textContent = restaurant.restaurant.cuisines

    restaurantContainer.appendChild(nameP)
    restaurantContainer.appendChild(cuisineP)
  },

  render: function(restaurants) {
    this.resetRender()
    var restaurantContainer = document.getElementById("restaurants-info-container")
    var title = document.createElement("h2")
    title.textContent = "Restaurants";
    restaurantContainer.appendChild(title)

    restaurants.forEach(function(restaurant) {
      this.renderRestaurant(restaurant)
    }.bind(this))
  },

  resetRender: function(){
    var restaurantContainer = document.getElementById("restaurants-info-container")
    restaurantContainer.innerHTML = ""
  },

  renderMarkers: function(restaurantList){
    var colourMarker = "public/markers/pink_markerA.png"
    var infoWindow = "Test window"
    restaurantList.forEach(function(restaurant){
      mapController.addColourMarker(restaurant, colourMarker, infoWindow)
    })
  }
}


module.exports = displayRestaurants
