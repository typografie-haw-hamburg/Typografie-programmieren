//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

var circleCountY = 10;
var circleCountX = 5;


for (var i=0; i<circleCountY; i++) {
  var randomStroke = b.random(1, 20);
  b.strokeWeight(randomStroke);

  for(var j=0; j<circleCountX; j++) {
    var strokeColor = b.color(b.random(0,255), b.random(0, 255), 100);
    b.stroke(strokeColor);
    var random = b.floor(b.random(1, 14));
    var bild = b.image(random + "ABC.jpg", j*100, i*100,);
    var bildWidth = b.itemWidth(bild);
    var bildHeight = b.itemHeight(bild);
    var scale = b.random(0.2,0.5);
    b.transformImage(bild, j*100, i*100, bildWidth * scale, bildHeight * scale);
  }

}


} //draw

b.go();
