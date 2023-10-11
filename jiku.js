let menuButton = document.getElementById("menuButton")
let menuOptions = document.getElementById("menuOptions")

// Toggle menu options
menuButton.addEventListener("click", function(event){
  event.stopPropagation()
  if (menuOptions.style.display === "block") {
      menuOptions.style.display === "none"
  } else {
      menuOptions.style.display = "block"
  }
}) 

document.body.addEventListener("click", function(event) {
  if (event.target !== menuButton && event.target !== menuOptions) {
  menuOptions.style.display = "none";
}
});

menuOptions.addEventListener("click", function(event){
  event.stopPropagation();
})