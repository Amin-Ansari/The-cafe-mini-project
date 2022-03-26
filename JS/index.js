let menuButton = document.querySelector("button");
let barsButton = document.querySelector("#bars");
let theMenu = document.querySelector("#mob-menu");
let coldButton = document.querySelector("#cold");
let warmButton = document.querySelector("#warm");
let theWarmMenu = document.querySelector("#warm-bar");
let theColdMenu = document.querySelector("#cold-bar");

function menuShowAndHide() {
  theMenu.classList.toggle("toggle-show");
}

function warmBar() {
  if (warmButton.classList.contains("menu-selected") == true) {
  } else {
    coldButton.classList.remove("menu-selected");
    warmButton.classList.add("menu-selected");
  }
}
function coldBar() {
  if (coldButton.classList.contains("menu-selected") == true) {
  } else {
    warmButton.classList.remove("menu-selected");
    coldButton.classList.add("menu-selected");
  }
}
function menucontent() {
  if (coldButton.classList.contains("menu-selected")) {
    if (theColdMenu.classList.contains("dis-none")) {
      theColdMenu.classList.remove("dis-none");
      theWarmMenu.classList.add("dis-none");
    }
  } else if (warmButton.classList.contains("menu-selected")) {
    if (theWarmMenu.classList.contains("dis-none")) {
      theColdMenu.classList.add("dis-none");
      theWarmMenu.classList.remove("dis-none");
    }
  }
}

barsButton.addEventListener("click", menuShowAndHide);
document.querySelector("#test").addEventListener("click", (test) => {
  if (test.target !== barsButton) {
    if (theMenu.classList.contains("toggle-show") == false) {
      theMenu.classList.add("toggle-show");
    }
  }
});
warmButton.addEventListener("click", function () {
  warmBar();
  menucontent();
});
coldButton.addEventListener("click", function () {
  coldBar();
  menucontent();
});
