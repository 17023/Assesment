function closePopup() {
  document.getElementById("popup").style.display = "none";
}

setTimeout(function(){
  document.getElementById('popup').style.display = "block";
}, 3500)

function buttonPopup() { //
  var x = document.getElementById("examplePopup");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", "");}, 2500)
}