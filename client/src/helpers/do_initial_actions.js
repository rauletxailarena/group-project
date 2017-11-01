var displayWelcomeView = require('../views/display_welcome_view')

var doInitialActions = function(){

  // Put anything in here which we want to happen immediately
  // on loading page
  // e.g. not having to wait for SUBMIT button to be clicked.

  // Hide all the non-essential elements
  displayWelcomeView.renderWelcomeScreen();

}

module.exports = doInitialActions;
