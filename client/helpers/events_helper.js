var hiddenListKey = require("./list_key.js")

var eventsHelper = {

  getRequest: function ( callback ) {
    var url = "https://api.list.co.uk/v1/events"


    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.setRequestHeader("Authorization", "Bearer " + hiddenListKey )

    xhr.addEventListener('load', function () {
      console.log("xhr");
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)

    })

    xhr.send()
  }

}

// eventsHelper.getRequest( function (data){
//   // console.log("event data", data[0].schedules[0].place.lng)
//   // console.log("event data", data[0].name)
//   // console.log("event data", data[0].descriptions[0].description)
//
// })


module.exports = eventsHelper
