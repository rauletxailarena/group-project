var eventsHelper = require("./events_helper")

var makeEventsButtonWork = function(){

  var button = document.getElementById("events-button")

  button.addEventListener("click", function(){
    console.log("Events button clicked")
    // Insert real code here
    eventsHelper.getRequest( function (data){
      console.log("returned events = ", data)
    })


  })
}

module.exports = makeEventsButtonWork;
