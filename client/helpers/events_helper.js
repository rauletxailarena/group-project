var hiddenListKey = require("./keys/list_api_key.js")
var NightOutEvent = require('../src/models/night_out_event.js')

var eventsHelper = {

  getRequest: function ( callback ) {

    // ?param=value&param2=value2...
    // Look for:
    // ?
    // =
    // &
    // var url = "https://api.list.co.uk/v1/events"
    var url = "https://api.list.co.uk/v1/search"

    // DEBUG - does this work? filter just events with a performance tonight?
    // var extra = "?query=tonight"
    // var extra = "?query*=*tonight"  // NO WORK :(
    // var extra = "?query=the&near=50.1111,-3.1222/100"  // THIS WORKS!
    // var extra = "?query=thetonight"                 // THIS WORKS!
    var extra = "?query=the"                 // THIS WORKS!
    url += extra
    console.log("URL", url)
    // FINDINGS
    // 1) Can use 'query=thetext' to search for events with 'thetext' in
    // 2) The 'query=tonight' doesn't appear to work
    // 3) The 'near=NN.NNNN,NN.NNNN/NNNN' doesn't appear to work

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
