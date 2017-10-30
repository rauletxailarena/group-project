var displayWelcomeViews = {
  renderInformationScreen: function(){
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
