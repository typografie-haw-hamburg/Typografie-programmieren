// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear (b.doc ());
  b.units (b.MM);

  //Linie
  b.line(b.width / 2, 0, b.width / 2, b.height);

  for(var i = 0; i < 50; i++) {

    b.fill(255, 255, 255);

    var x = b.random (b.width / 2, b.width);
    var y = b.random (0, b.height);

    var size = b.random (10, 20);

    if (x > b.width / 2 + size / 2) {
      b.ellipse (x, y, size, size);

    }
  }
}

b.go();
