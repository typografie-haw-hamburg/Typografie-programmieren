// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
//Hier kommt der Code hin
b.clear(b.doc());
//leeres dokument

b.units(b.MM);
//Einheit in mm

b. noFill ();

var x = 60
var y = 140
var size = 100

//Haus
b. rect (x, y, size, size);
b. line (x, y, x + size, y + size);
b. line (x, y + size, x + size, y);

//Dach
b.line (x, y, x + size / 2, y - size / 2);
b.line (x + size / 2, y - size / 2, x + size, y);

}

b.go();
