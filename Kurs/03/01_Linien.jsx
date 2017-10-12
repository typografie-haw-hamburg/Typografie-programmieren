﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  b.beginShape();

  for(var i = 0; i < 80; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    b.vertex(x, y);

  }

  b.endShape();

}

b.go();
