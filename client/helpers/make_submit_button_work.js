var postCodeRequestHelper = require("./postCodeRequestHelper")

var submitButton = {
  addFunctionality: function() {
    var button = document.getElementById("postcode-submit-button")
    var postcodeInput = document.getElementById("postcode-input")
    button.addEventListener("click", function() {
      var postcode = postcodeInput.value
      postCodeRequestHelper.getRequest(postcode, function(data) {
        console.log("City by postcode", data.result)
      })
    })
  }
}

module.exports = submitButton
