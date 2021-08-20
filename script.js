//Popup at the beginning odf the website
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
function fbBeginningText() {
  document.getElementById("fbBeginningText").style.display = "none";
}

//Displays accordion id image map failed
function fbimageMapFailed() {
  document.getElementById("fbTable").style.display = "block";
  document.getElementById("imageMap").style.display = "none";
}

//Reloads the image map if user wants to go back
function fbGoBack() {
  document.getElementById("imageMap").style.display = "block";
  document.getElementById("fbTable").style.display = "none";
}


//Goes to the next section in the fbProfile part
  function next1() {
    document.getElementById("profileOne").style.display = "block";
    document.getElementById("profileBeginning").style.display = "none";
  }
  function next2() {
    document.getElementById("profileTwo").style.display = "block";
    document.getElementById("profileOne").style.display = "none";
  }
  function next3() {
    document.getElementById("profileThree").style.display = "block";
    document.getElementById("profileTwo").style.display = "none";
  }
  function next4() {
    document.getElementById("profileBeginning").style.display = "block";
    document.getElementById("profileThree").style.display = "none";
  }

//Goes to the previous section in the fbProfile part
  function previous1() {
    document.getElementById("profileThree").style.display = "block";
    document.getElementById("profileBeginning").style.display = "none";
  }
  function previous2() {
    document.getElementById("profileBeginning").style.display = "block";
    document.getElementById("profileOne").style.display = "none";
  }
  function previous3() {
    document.getElementById("profileOne").style.display = "block";
    document.getElementById("profileTwo").style.display = "none";
  }
  function previous4() {
    document.getElementById("profileTwo").style.display = "block";
    document.getElementById("profileThree").style.display = "none";
  }