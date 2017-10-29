var displayWelcomeViews = {
  removeWelcome: function(){
    button = document.getElementById("welcome-input-button")
    input = document.getElementById("welcome-input")
    welcomeText = document.getElementById("welcome-text-label")
    button.style.display = "none";
    input.style.display = "none";
    welcomeText.style.display = "none"
  }
}

module.exports = displayWelcomeViews
