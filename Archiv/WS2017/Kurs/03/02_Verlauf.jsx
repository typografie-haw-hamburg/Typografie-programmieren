// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var color1 = b.color(255, 125, 0);
  var color2 = b.color(0, 45, 165);

  var gradient = b.gradient(color1, color2);

  b.fill( gradient );

  b.rect(40, 40, 100, 100);
  b.ellipse(b.width / 2, b.height / 2, 80, 80);

}

b.go();
