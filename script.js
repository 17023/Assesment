//Javascript at the bottom of all HTML files as well.
//Hides beginning text when area(s) on image map clicked
function beginningText() {
  document.getElementById("beginningText").style.display = "none";
}

//Displays accordion if image map failed
function imageMapFailed() {
  document.getElementById("failedInfo").style.display = "block"; //changes "failedInfo" to block when button clicked
  document.getElementById("imageMap").style.display = "none"; //Hides "imageMap" when button clicked
}

//Reloads the image map if user wants to go back
function goBack() {
  document.getElementById("imageMap").style.display = "block"; //changes "imageMap" to block when button clicked
  document.getElementById("failedInfo").style.display = "none"; //Hides "failedInfo" when button clicked
}
