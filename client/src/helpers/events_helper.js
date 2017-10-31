var hiddenListKey = require("./keys/list_api_key.js")
var NightOutEvent = require('../models/night_out_event.js')

var eventsHelper = {

  get: function( url, callback ) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.addEventListener('load', function () {
      console.log("xhr");
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })
    xhr.send()
  },

  getRequest: function ( callback, postcode ) {

    // ?param=value&param2=value2...
    // Look for:
    // ?
    // =
    // &
    var url = "https://api.list.co.uk/v1/events"
    // var url = "https://api.list.co.uk/v1/search"

    // Substitute in coordinates from map later.
    // Might also want to be able to change the radius to other than 5 miles
    var near = "near=53.55,-1.479/50"

    var makeDateText = function(theDate) {
      var theYear = theDate.getFullYear()     // getYear() doesn't work!
      var theMonth = theDate.getMonth() + 1   // 0 is first month of year!
      var theDay = theDate.getDate()          // getDay() is day of week!
      var month0 = (theMonth<10) ? "0" : ""
      var day0 = (theDay<10) ? "0" : ""
      var dateText = theYear + "-" + month0 + theMonth + "-" + day0 + theDay
      // console.log(dateText)
      return dateText
    }

    // Calculate min and max date (texts)
    var minDate = new Date    // Today's date by default!
    var maxDate = new Date    // (Temporarily incorrect. Correct it on next line)
    var daysToAdd = 1
    maxDate.setDate(minDate.getDate() + daysToAdd)
    // console.log(minDate, maxDate)
    var minDateText = makeDateText(minDate)
    var maxDateText = makeDateText(maxDate)

    // Calculate a suitable date query for API
    var dateQuery = "&min_date=" + minDateText + "&max_date=" + maxDateText
    // // Here is a typical format:
    // var dateQuery = "&min_date=2017-10-31&max_date=2017-11-01"

    url += "?" + near + dateQuery
    console.log("URL", url)

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
