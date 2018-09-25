// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.fill(255, 255, 0);

  // 15°-Drehung in Radians umwandeln
  var myRotation = b.radians(15);
  b.rotate( myRotation );

  b.rect(0, 0, 150, 50);

  // zusätzliche Rotation um einen zufälligen Wert
  var myRandomRotation = b.radians( b.random(0, 60) );
  b.rotate( myRandomRotation );
  b.scale(2);

  b.rect(0, 100, 150, 50);

  // Rotation und Skalierung zurücksetzen
  b.resetMatrix();

  b.rect(0, 200, 150, 50);

}

b.go();
