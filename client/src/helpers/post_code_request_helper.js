var requestHelper = require('./request_helper.js')

var postCodeRequestHelper = {
  getRequest: function (postcode, callback) {
    var url = "http://api.postcodes.io/postcodes/" + postcode
    var headerArray = []
    requestHelper.getRequestWithHeaders(url, headerArray, function(data){
      console.log("Postcode data", data)
      callback(data)
    })
  }
}

module.exports = postCodeRequestHelper
