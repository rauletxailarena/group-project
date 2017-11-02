var hiddenApiKey = require('./keys/restaurant_api_key.js')
var requestHelper = require('./request_helper.js')

var restaurantRequestHelper = {

  getRestaurantsByCoords: function(lat, lng, callback) {

    var url = "https://developers.zomato.com/api/v2.1/search"
      + "?lat=" + lat
      + "&lon=" + lng
      + "&sort=real_distance"

    var headerArray = [
       { header: "user-key", value: hiddenApiKey }
    ]

    requestHelper.getRequestWithHeaders(url, headerArray, function(data){
      console.log("Restaurant data", data)
      callback(data)
    })

  }
}

module.exports = restaurantRequestHelper
