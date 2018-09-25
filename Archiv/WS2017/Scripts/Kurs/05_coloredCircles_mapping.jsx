// colors circles based on their position on the y-scale
// the further down the circles are, the more red will be used in their color

//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  var circleCount = 50;
  var xPos = 25;
  var diameter = 20;


  for(var i = 0; i < circleCount; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    var red = b.map(y , 0, b.height, 0, 255);
    b.fill(red, 0, 0);

    b.ellipse(x, y, diameter, diameter);


  }


}

b.go();
