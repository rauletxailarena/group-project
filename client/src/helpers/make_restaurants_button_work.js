

var makeRestaurantsButtonWork = function(){

  var button = document.getElementById("restaurants-button")

  button.addEventListener("click", function(){
    console.log("Restaurants button clicked")
    // make request for restaurants
    restaurantRequestHelper.getRestaurantsByCoords(lat, lng, function(data) {
      console.log("Restaurants", data.restaurants)
      // displayRestaurants.render(data.restaurants)
    })
  })
}

module.exports = makeRestaurantsButtonWork;
