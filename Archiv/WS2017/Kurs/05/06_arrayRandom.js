// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  var names = ["Timo", "Klaus", "Marianne", "Rosalie", "Hans"];

  // zufälliger Wert zwischen 0 und der Länge des Arrays
  // diesen Wert dann abrunden. Ergebnis: zufälliger Index
  var randomIx = b.random(0, names.length);
  var roundedIx = b.floor( randomIx )

  b.println(roundedIx);

  alert( "Zufällige Auswahl: " + names[roundedIx] );

}

b.go();
