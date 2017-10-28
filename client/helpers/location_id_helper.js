var hiddenApiKey = require("./location_id_api_key.js")

var locationIdHelper = {
  tempUrl: "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=",
  apiKey: hiddenApiKey,

  getCityIdByName: function(name, callback) {
    var url = this.tempUrl + this.apiKey
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url)

    xhr.addEventListener("load", function() {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      var listOflocations = data.Locations.Location;
      var targetCity;
      for (var city of listOflocations){
        if (city.name === name){
          targetCity = city;
        }
      }
      callback(targetCity.id)
    })
    xhr.send()
  }
}

locationIdHelper.getCityIdByName("Glasgow", function(data) {
  console.log("Data: ", data)
})


module.exports = locationIdHelper
