var hiddenApiKey = require('./restaurant_api_key.js')

var restaurantRequestHelper = {

  getRestaurantsByCoords: function(lat, lng, callback) {

    var url =  "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lng + "&sort=real_distance"

     console.log("restaurants url:", url);
     var xhr = new XMLHttpRequest()
     xhr.open("GET", url)
     xhr.setRequestHeader("user-key", hiddenApiKey )

     xhr.addEventListener("load", function() {
       console.log(xhr)
       var jsonString = xhr.responseText
       var data = JSON.parse(jsonString)
       callback(data)
     })
     xhr.send()
  }
}

restaurantRequestHelper.getRestaurantsByCoords(55.943292, -3.212005, function(data){console.log(data);})


module.exports = restaurantRequestHelper
