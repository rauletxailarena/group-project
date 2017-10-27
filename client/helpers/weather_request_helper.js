var weatherRequestHelper = {
  tempUrl: "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/",
  timeSpan: "?res=3hourly&key=",
  apiKey: "6b1853c7-7088-4c1f-9011-3569a35cf00b",

  getRequest: function(locationId, callback) {
     var url = this.tempUrl + locationId + this.timeSpan + this.apiKey
     console.log("weather url:", url);
     var xhr = new XMLHttpRequest()
     xhr.open("GET", url)

     xhr.addEventListener("load", function() {
       console.log(xhr)
       var jsonString = xhr.responseText
       var data = JSON.parse(jsonString)
       callback(data)
     })
     xhr.send()
  }
}



module.exports = weatherRequestHelper
