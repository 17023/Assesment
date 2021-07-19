//Popup
setTimeout(function(){
  document.getElementById('popup').style.display = "block";
}, 3500);

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

//How to use button
function buttonPopup() { //
  var x = document.getElementById("examplePopup");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", "");}, 2500);
}

function facebookHomePage() {
  document.getElementById("facebookHomePage").style.display = "block";
  document.getElementById("beginningText").style.display = "none";
}