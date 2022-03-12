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
