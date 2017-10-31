var eventsHelper = require('./events_helper.js')
var NightOutEvent = require('../models/night_out_event.js')
var displayWelcomeView = require('../views/display_welcome_view')

var doInitialActions = function(){

  // Put anything in here which we want to happen immediately
  // on loading page
  // e.g. not having to wait for SUBMIT button to be clicked.

  // Hide all the non-essencial elements
  displayWelcomeView.renderWelcomeScreen();

  // Console log some data returned from the events/list API
  // There's some code in the events_helper.js
  eventsHelper.getRequest( function (data){
    console.log("All events", data)
    var theEventObject = data[0]
    var theEventModelledObject = new NightOutEvent(theEventObject)
    console.log("First event as returned object", theEventObject)
    console.log("First event as model object", theEventModelledObject)
  })

}

module.exports = doInitialActions;
