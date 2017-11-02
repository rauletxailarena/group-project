var requestHelper = require('./request_helper.js')

var postCodeRequestHelper = {
  getRequest: function (postcode, callback) {
    var url = "http://api.postcodes.io/postcodes/" + postcode
    requestHelper.getRequest(url, function(data){
      callback(data)
    })
  }
}

module.exports = postCodeRequestHelper
