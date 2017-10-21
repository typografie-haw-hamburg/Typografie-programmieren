// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  var userName = prompt("Wie lautet dein Name?", "");

  alert("Hallo " + userName + "! Dein Name hat " + userName.length + " Buchstaben.")

}

b.go();
