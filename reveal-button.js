var removeItemsButtons = document.getElementsByClassName("reveal-button")
console.log(removeItemsButtons)
for (var i = 0; i < removeItemsButtons.length; i++) {
  var button = removeItemsButtons[i]
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
  })
}