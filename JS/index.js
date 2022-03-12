var state = false;
function openAndClose() {
  if (state == false) {
    document.getElementById("test").style = "display:block";
    state = true;
  } else {
    document.getElementById("test").style = "display:none";
    state = false;
  }
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
