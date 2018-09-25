// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear ( b.doc());
b.units (b. MM);
b.noStroke();

var dist = b. height / 4;

//zwei Farben festlegen
var red = b.color(255, 0, 0);
var blue = b.color(0, 0, 255);

var randomColors = [];
for (var i = 0; i < 10; i++) {
  randomColors.push(b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255)));

  b.fill (b.gradient( red, blue, ));
  b.ellipse (100, 100, 100, 100);

}

}

b.go();