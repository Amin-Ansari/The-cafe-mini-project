function openAndClose() {
  let state = false;
  if (state == false) {
    document.getElementById("mob-nav").style = "display:block";
    state = true;
  } else {
    document.getElementById("mob-nav").style = "display:none";
    state = false;
  }
}
