// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// würfelt zufällig Positionen auf der Seite aus
// zeichnet Kreise aber nur, wenn sie auf der rechten Seite landen

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  b.line(b.width / 2, 0, b.width / 2, b.height);
  b.noFill();

  for (var i = 0; i < 60; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random(10, 30);

    if(x > b.width / 2 + size / 2) {
      b.ellipse(x, y, size, size);
    }

  }

}

b.go();
