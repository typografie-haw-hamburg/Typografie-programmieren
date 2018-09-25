//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  var red = b.color(255, 0, 0);
  var blue = b.color(0, 0, 255);

  for(var i = 0; i < 200; i++) {
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    if(x > b.width / 2   &&   y < b.height / 2) {
      b.fill(red);
    } else if(x < b.width / 2   &&   y > b.height / 2) {
      b.fill(blue);
    }

    b.ellipse(x, y, 20, 20);

    b.fill(0);
  }


}

b.go();
