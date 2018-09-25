// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  var size = 160;
  var radius = size / 2;


  // großer Kreis
  b.ellipse(b.width / 2, b.height / 2, size, size);


  // kleinen Kreise
  b.fill(255);

  for(var i = 0; i < 200; i++) {
    // Positionen
    var x = b.random(b.width / 2 - radius, b.width / 2 + radius);
    var y = b.random(b.height / 2 - radius, b.height / 2 + radius);

    var sizeSmallCircles = b.random(5, 25);
    var radiusSmallCircles = sizeSmallCircles / 2;

    // Abstand zwischen Kreismittelpunkt und zufälliger Position
    var distance = b.dist(b.width / 2, b.height / 2, x, y);

    if(distance < radius - radiusSmallCircles) {
      b.ellipse(x, y, sizeSmallCircles, sizeSmallCircles);
    }

  }


}

b.go();
