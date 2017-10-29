var displayRestaurants = {
  renderRestaurant: function(restaurant) {
    var restaurantContainer = document.getElementById("restaurants-info-container")
    var nameP = document.createElement("p")
    var cuisineP = document.createElement("p")

    // cuisineP.classList.add("small-text")

    nameP.textContent = restaurant.restaurant.name
    cuisineP.textContent = restaurant.restaurant.cuisines

    restaurantContainer.appendChild(nameP)
    restaurantContainer.appendChild(cuisineP)
  },

  render: function(restaurants) {

    var restaurantContainer = document.getElementById("restaurants-info-container")
    var title = document.createElement("h2")
    title.textContent = "Restaurants";
    restaurantContainer.appendChild(title)

    restaurants.forEach(function(restaurant) {
      this.renderRestaurant(restaurant)
    }.bind(this))
  }
}


module.exports = displayRestaurants