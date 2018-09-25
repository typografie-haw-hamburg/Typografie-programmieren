// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var myLetters = "abcdefghijklmnopqrstuvwxyz";

  var randomIx = b.random(0, myLetters.length);
  var roundedIx = b.floor( randomIx );

  alert( "Mein zufälliger Buchstabe ist " + myLetters[roundedIx] + "." );

}

b.go();
