var hiddenListKey = require("./keys/list_api_key.js")
var NightOutEvent = require('../src/models/night_out_event.js')

var eventsHelper = {

  getRequest: function ( callback ) {
    var url = "https://api.list.co.uk/v1/events"


    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    // OTHER THAN THIS LINE, ALL THE CODE
    // CAN BE FACTORED OUT INTO request_helper.js
    xhr.setRequestHeader("Authorization", "Bearer " + hiddenListKey )
    // <end comment>

    xhr.addEventListener('load', function () {
      console.log("xhr");
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)

    })

    xhr.send()
  }

}

module.exports = eventsHelper
