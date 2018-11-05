// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;


function draw() {
clear(doc());

size ("A4", PORTRAIT)

textFont("Hela");
var anzahl = 50;

for (var i = 0; i < anzahl; i++) {

var breite = width;
var hoehe = 40;

textSize(4 * i + 80);
textAlign(Justification.CENTER_ALIGN, VerticalJustification.BOTTOM_ALIGN);

text("HELA", 0, height / 4 - (hoehe + i), breite, hoehe + i);

textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);

text("HELA", 0, height / 2 - (hoehe + i) / 2, breite, hoehe + i);

textAlign(Justification.CENTER_ALIGN, VerticalJustification.TOP_ALIGN);

text("HELA", 0, height / 4 * 3, breite, hoehe + i);
}


noStroke();

for ( var j = 0; j < 80; j++) {
var x = random (width);
var y = random (height);
var groesse = random (5,16);
var farbe = random(180,240);

if (y > height / 5 && y < 2 * height / 5 || y > height / 5 * 3 && y < height / 5 * 4) {

for ( var i = 0; i < 5; i++) {
fill (farbe + i * 5);
ellipse (x, y, groesse - i, groesse - i);
}

}
}
}