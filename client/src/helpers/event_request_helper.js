var hiddenListKey = require("./keys/list_api_key.js")
var requestHelper = require("./request_helper.js")
var NightOutEvent = require('../models/night_out_event.js')

// Helper function - could be in a separate file
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

var calculateDateQuery = function(daysToAdd) {
  // Calculate min and max date (texts)
  var minDate = new Date    // Today's date by default!
  var maxDate = new Date    // (Temporarily incorrect. Correct it on next line)
  maxDate.setDate(minDate.getDate() + daysToAdd)
  var minDateText = makeDateText(minDate)
  var maxDateText = makeDateText(maxDate)
  // Calculate a suitable date query for API
  var dateQuery = "min_date=" + minDateText + "&" + "max_date=" + maxDateText
  // // Here is a typical format:
  // var dateQuery = "&min_date=2017-10-31&max_date=2017-11-01"
  return dateQuery
}

var calculateNearQuery = function(lat, lng, radiusMiles) {
  var nearQuery = "near=" + lat + "," + lng + "/" + radiusMiles
  return nearQuery
}

var eventRequestHelper = {

  getEventsByCoords: function (lat, lng, radiusMiles, daysAhead, callback) {

    var url = "https://api.list.co.uk/v1/events"
    var nearQueryText = calculateNearQuery(lat, lng, radiusMiles)
    var dateQueryText = calculateDateQuery(daysAhead)
    url += "?" + nearQueryText + "&" + dateQueryText
    console.log("URL", url)

    var headerArray = [
       { header: "Authorization", value: "Bearer " + hiddenListKey }
    ]

    console.log("Headers", headerArray)

    requestHelper.getRequestWithHeaders(url, headerArray, function(arrayFromEventAPI){
      console.log("Events helper get request started")
      callback(arrayFromEventAPI)
    })
  }

}

module.exports = eventRequestHelper
