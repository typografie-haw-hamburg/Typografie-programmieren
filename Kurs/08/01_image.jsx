// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.noStroke();

  // Bild importieren
  var myImage = b.image("robo_1.png", 0, 0);

  var w = b.itemWidth( myImage );
  var h = b.itemHeight( myImage );

  // Bild transformieren
  var scaleFactor = 0.4;
  b.transformImage( myImage, 100, 80, w * scaleFactor, h * scaleFactor);

}

b.go();
