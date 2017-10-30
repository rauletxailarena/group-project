var displayWelcomeViews = {
  removeWelcome: function(){
    // button = document.getElementById("welcome-input-button")
    // input = document.getElementById("welcome-input")
    // welcomeText = document.getElementById("welcome-text-label")
    // button.style.display = "none";
    // input.style.display = "none";
    // welcomeText.style.display = "none"
    var elementsToHide = document.getElementsByClassName("hide-after-submit")
    for (var element of elementsToHide){
      element.style.display = "none";
    }
    var elementsToDisplay = document.getElementsByClassName("hide-at-welcome")
    console.log("Displaying previously hidden elements", elementsToDisplay);
    for (var element of elementsToDisplay){
      element.style.display = "flex";

    }
  },
  renderWelcomeScreen: function(){
    var elementsToHide = document.getElementsByClassName("hide-at-welcome")
    for (var element of elementsToHide){
      element.style.display = "none";
    }
  }
}

module.exports = displayWelcomeViews
