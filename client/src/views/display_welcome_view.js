var displayWelcomeViews = {
  removeWelcome: function(){
    button = document.getElementById("welcome-input-button")
    input = document.getElementById("welcome-input")
    welcomeText = document.getElementById("welcome-text-label")
    button.style.display = "none";
    input.style.display = "none";
    welcomeText.style.display = "none"
  },
  renderWelcomeScreen: function(){
    var elementsToRemove = document.getElementsByClassName("hide-at-welcome")
    for (var element of elementsToRemove){
      element.style.display = "none";
    }
  }
}

module.exports = displayWelcomeViews
