// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noStroke();
  b.fill(255, 0, 0);

  for (var i = 0; i < 20; i++) {
    var x = b.random( b.width );
    var y = b.random( b.height );
    var o = b.random( 0, 100 );

    var circle = b.ellipse(x, y, 50, 50);

    b.opacity(circle, o );

  }

}

b.go();
