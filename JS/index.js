let menuButton = document.querySelector("button");
let barsButton = document.querySelector("#bars");
let theMenu = document.querySelector("#mob-menu");

function menuShowAndHide() {
  theMenu.classList.toggle("toggle-show");
}
function selectTheTitle(theElement) {
  if (theElement.id === "cold") {
    document.getElementById("warm").style =
      "background-color: transparent !important;color: #000;";
    theElement.style = "background-color: #616161 !important;color: #fff;";
    document.getElementById("warm-bar").style.display = "none";
    document.getElementById("cold-bar").style.display = "block";
  } else {
    document.getElementById("cold").style =
      "background-color: transparent !important;color: #000;";
    theElement.style = "background-color: #616161 !important;color: #fff;";
    document.getElementById("cold-bar").style.display = "none";
    document.getElementById("warm-bar").style.display = "block";
  }
}

barsButton.addEventListener("click", menuShowAndHide);
document.querySelector("#test").addEventListener("click", (test) => {
  if (test.target !== barsButton) {
    theMenu.classList.toggle("toggle-show");
  }
});
