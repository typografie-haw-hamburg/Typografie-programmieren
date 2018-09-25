//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


  var input = prompt("Bitte einen Text eingeben.", "Beispiel");

  var inputLength = input.length;

  alert("Der Text " + input + " ist " + inputLength + " Buchstaben lang.");

}

b.go();
