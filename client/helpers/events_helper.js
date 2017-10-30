var hiddenListKey = require("./list_key.js")
var Event = require('../src/models/event.js')

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

eventsHelper.getRequest( function (data){
  var theEventObject = data[0]
  var theEventModelledObject = new Event(theEventObject)
  console.log(theEventObject)
  console.log(theEventModelledObject)
})


module.exports = eventsHelper
