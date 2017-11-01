var mapController = require("../helpers/map_controller.js")
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


    var button = document.createElement("button")
    button.addEventListener("click", function(eventObject){
      var xhr = new XMLHttpRequest()
      xhr.open("POST", "http://localhost:3000/api/locations" )
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.addEventListener('load', function(){
        console.log("Saved object");
      })
      console.log(restaurant);
      var modelObject = new Restaurant(restaurant)
      var stringObject = JSON.stringify(modelObject)
      xhr.send(stringObject);
    })
    button.textContent = "Add to my plan";

    nameHTML.textContent = restaurant.name;
    addressHTML.textContent = restaurant.address;
    cuisinesHTML.textContent = restaurant.cuisines;
    menuURL.href = restaurant.menu_url;

    container.appendChild(nameHTML);
    container.appendChild(addressHTML);
    container.appendChild(cuisinesHTML);
    container.appendChild(menuURL);
    container.appendChild(button)
    mapController.addColourMarker(restaurant, colourMarker, container)
  },

  renderMarkers: function(restaurantList){
    restaurantList.forEach(function(apiRestaurant){
      var restaurant = new Restaurant(apiRestaurant)
      this.renderMarker(restaurant)
      console.log("coords: ", restaurant.coords);
    }.bind(this))
  }
}


module.exports = displayRestaurants
