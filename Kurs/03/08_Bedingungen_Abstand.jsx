// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );

  b.noStroke();

  for(var i = 0; i < 1000; i++) {

    var randomNumber = b.random(0, 10);

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random(2, 6);

    var distance = b.dist(x, y, b.width / 2, b.height / 2);


    if( distance < 50) {
      b.fill(255, 0, 0);
    } else {
      b.fill(0, 0, 255);
    }

    b.ellipse(x, y, size, size);

  }

}

b.go();
