//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.noStroke();

for (var i = 0; i < 40; i++) {
  
  var imageWidth = 1+i*10
  var imageHeight = 200
  var x = imageWidth
  var y = 10
  b.image("haus.png",x,y,imageWidth,imageHeight);
}

for (var i = 0; i < 40; i++) {
  
  var imageWidth2 = 1+i*6
  var imageHeight2 = 200
  var x2 = 300+imageWidth2
  var y2 = 220
  b.image("haus2.png",x2,y2,imageWidth2,imageHeight2);
}

for (var i = 0; i < 40; i++) {
  
  var imageWidth3 = 1+i*3
  var imageHeight3 = 200
  var x3 = 100+imageWidth3
  var y3 = 440
  b.image("haus.png",x3,y3,imageWidth3,imageHeight3);
}

}

b.go();
