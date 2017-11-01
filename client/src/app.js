var doInitialActions = require('./helpers/do_initial_actions.js')
var UI = require('./helpers/UI.js')

window.addEventListener('load', function(){
  // Do some stuff before SUBMIT is pressed
  doInitialActions();

  // Make all the buttons work
  var ui = new UI();
  ui.render()
});
