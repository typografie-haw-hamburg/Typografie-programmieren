// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.noStroke();

  // Faktor für Anfangsgröße
  var scaleFactor = 0.8;

  for(var i = 0; i < 40; i++) {

    // Bild importieren
    var myImage = b.image("robo_1.png" , 0, 0);

    var w = b.itemWidth( myImage );
    var h = b.itemHeight( myImage );

    // Bild transformieren
    b.transformImage( myImage, b.width / 2 - (w * scaleFactor / 2) + i * 2, b.height / 2 - (h * scaleFactor / 2) + i * 2, w * scaleFactor, h * scaleFactor);

    scaleFactor *= 0.95;
  }

}

b.go();
