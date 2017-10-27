var locationIdHelper = {
  tempUrl: "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=",
  apiKey: "6b1853c7-7088-4c1f-9011-3569a35cf00b",

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

locationIdHelper.getRequest("60.4322", "-1.2992", function(data) {
  console.log("Data: ", data)
})


module.exports = locationIdHelper
