// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

// Einrichtung
  b.clear ( b.doc() );
  b.units( b.MM );

// for-loop
var color1 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255) );
var color2 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255) );



  b.gradientMode(b.RADIAL);
  b.fill(b.gradient(color1, color2, "RandomRadial"));
  b.rect(0, 0, b.width, b.height);

for(var i = 0; i < 30; i++){
  var size = b.random(0, 10);
    var x = b.random(size / 2, b.width - size / 2);
    var y = b.random(size / 2, b.height - size / 2);
    var x1 = b.random(size / 2, b.width - size / 2);
    var y1 = b.random(size / 2, b.height - size / 2);
    var x2 = b.random(size / 2, b.width - size / 2);
    var y2 = b.random(size / 2, b.height - size / 2);
    var x3 = b.random(size / 2, b.width - size / 2);
    var y3 = b.random(size / 2, b.height - size / 2);

b.noFill();
b.strokeWeight(4);
b.stroke(color1);
b.beginShape( b.CLOSE );

b.vertex(x, y);
b.vertex(x1, y1);
b.vertex(x2, y2);
b.vertex(x3, y3);

b.endShape();

}

}
b.go();
