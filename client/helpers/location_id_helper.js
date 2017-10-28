var hiddenApiKey = require("./location_id_api_key.js")

var locationIdHelper = {
  tempUrl: "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=",
  apiKey: hiddenApiKey,

  getRequest: function(lat, lng, callback) {
    var url = this.tempUrl + this.apiKey
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url)

    xhr.addEventListener("load", function(lat, lng) {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })
    xhr.send()
  }
}

locationIdHelper.getRequest(null,null, function(data) {
  console.log("Data: ", data)
})


module.exports = locationIdHelper
