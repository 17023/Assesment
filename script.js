//Popup at the beginning of the website
setTimeout(function(){
  document.getElementById('popup').style.display = "block";
}, 2700);

//Closes popup at the beginning of the website
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

//How to use button
function buttonPopup() {
  var x = document.getElementById("examplePopup");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", "");}, 2500);
}

//Hides beginning text when area(s) on image map clicked
function beginningText() {
  document.getElementById("beginningText").style.display = "none";
}

//Displays accordion id image map failed
function imageMapFailed() {
  document.getElementById("failedInfo").style.display = "block";
  document.getElementById("imageMap").style.display = "none";
}

//Reloads the image map if user wants to go back
function goBack() {
  document.getElementById("imageMap").style.display = "block";
  document.getElementById("failedInfo").style.display = "none";
}