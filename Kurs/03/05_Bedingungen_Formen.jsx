// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );

  b.rectMode( b.CENTER );

  for(var i = 0; i < 20; i++) {

  var randomNumber = b.random(0, 10);

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    if( randomNumber < 5 ) {

      b.fill(255, 0, 0);
      b.ellipse(x, y, 80, 80);

    } else {

      b.fill(0, 0, 255);
      b.rect(x, y, 80, 80);

    }

  }

}

b.go();
