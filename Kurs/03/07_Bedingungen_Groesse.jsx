// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );

  b.rectMode( b.CENTER );
  b.stroke(255);
  b.strokeWeight(2);

  for(var i = 0; i < 20; i++) {

  var randomNumber = b.random(0, 10);

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random(20, 100);

    if( size < 50 ) {

      b.ellipse(x, y, size, size);

    } else {

      b.rect(x, y, size, size);

    }

  }

}

b.go();
