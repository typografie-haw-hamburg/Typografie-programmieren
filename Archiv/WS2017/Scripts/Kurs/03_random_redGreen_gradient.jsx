//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  var rotation = b.radians( 90 );
  b.println(rotation);

  b.rotate(rotation);

  var red = b.color(b.random(0, 255), 0, 0);
  var green = b.color(0, b.random(0, 255), 0);

  b.fill( b.gradient(red, green, "RotGrün") );

  b.ellipse(100, 100, 100, 100);

}

b.go();
