var hiddenApiKey = require('./location_id_api_key')

var weatherRequestHelper = {
  tempUrl: "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/",
  timeSpan: "?res=3hourly&key=",


  getCurrentWeatherById: function(locationId, callback) {
     var url = this.tempUrl + locationId + this.timeSpan + hiddenApiKey;
     console.log("weather url:", url);
     var xhr = new XMLHttpRequest()
     xhr.open("GET", url)

     xhr.addEventListener("load", function() {
       console.log(xhr)
       var weatherTypeCodes = {
         NA: "Not Available",
         0: "Clear night",
         1: "Sunny day",
         2: "Partly cloudy (night)",
         3: "Partly cloudy (day)",
         4: "Not used",
         5: "Mist",
         6: "Fog",
         7: "Cloudy",
         8: "Overcast",
         9: "Light rain shower (night)",
         10: "Light rain shower (day)",
         11: "Drizzle",
         12: "Light rain",
         13: "Heavy rain shower (night)",
         14: "Heavy rain shower (day)",
         15: "Heavy rain",
         16: "Sleet shower (night)",
         17: "Sleet shower (day)",
         18: "Sleet",
         19: "Hail shower (night)",
         20: "Hail shower (day)",
         21: "Hail",
         22: "Light snow shower (night)",
         23: "Light snow shower (day)",
         24: "Light snow",
         25: "Heavy snow shower (night)",
         26: "Heavy snow shower (day)",
         27: "Heavy snow",
         28: "Thunder shower (night)",
         29: "Thunder shower (day)",
         30: "Thunder"
       }
       var jsonString = xhr.responseText
       var data = JSON.parse(jsonString)
       var weatherTypeCode = data.SiteRep.DV.Location.Period[0].Rep[0].W;

       var weatherCode = weatherTypeCodes[weatherTypeCode];
       callback(weatherCode)
     })
     xhr.send()
  }
}

  weatherRequestHelper.getCurrentWeatherById(3066, function(data) {
    console.log("Weather request helper called: ",data);
  })


module.exports = weatherRequestHelper
