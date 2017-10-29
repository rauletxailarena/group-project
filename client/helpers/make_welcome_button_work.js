var makeWelcomeButtonWork = function(){
  button = document.getElementById("welcome-input-button")
  input = document.getElementById("welcome-input")
  button.addEventListener("click", function(){
    console.log(input.value);
  })
}

module.exports = makeWelcomeButtonWork;
