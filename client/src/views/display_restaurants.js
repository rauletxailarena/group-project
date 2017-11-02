var mapController = require("../helpers/map_controller.js")
var requestHelper = require("../helpers/request_helper.js")
var Restaurant = require("../models/restaurant.js")

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

  renderMarker: function(restaurant) {
    var colourMarker = "public/markers/a_purple_restaurant_marker.png"
    // create info window for the element
    var container = document.createElement("div")
    var nameHTML = document.createElement("h3")
    var addressHTML = document.createElement("p")
    var cuisinesHTML = document.createElement("p")
    var menuURL = document.createElement("a")

    nameHTML.textContent = restaurant.name;
    addressHTML.textContent = restaurant.address;
    cuisinesHTML.textContent = restaurant.cuisines;
    menuURL.href = restaurant.menu_url;

    container.appendChild(nameHTML);
    container.appendChild(addressHTML);
    container.appendChild(cuisinesHTML);
    container.appendChild(menuURL);

    if (restaurant.canAdd()) {
      var saveButton = document.createElement("button")
      saveButton.addEventListener("click", function(eventObject){
        var url = "http://localhost:3000/api/locations"
        var callback = function(postResponseData){
          console.log("Saved restaurant, with response:", postResponseData)
        }
        var payload = restaurant
        requestHelper.postRequest(url, callback, payload)
      })
      saveButton.textContent = "Add to my plan";
      container.appendChild(saveButton)
    }

    mapController.addColourMarker(restaurant, colourMarker, container)
  },

  renderMarkers: function(restaurantList){
    restaurantList.forEach(function(apiRestaurant){
      var restaurant = new Restaurant(apiRestaurant)
      this.renderMarker(restaurant)
      // console.log("coords: ", restaurant.coords);
    }.bind(this))
  }
}


module.exports = displayRestaurants
