//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
//var colors = [b.color();]

for (var i=0; i<10; i++) {
  var redValue = i * 20;
  for(var j=0; j<5; j++) {
    var blueValue = j * 40;
    b.fill( b.color(redValue,0,blueValue) );
    var ellipse = b.ellipse(j*100, i*100, 80, 80);
    b.opacity(ellipse, 70 - i * 5);
  }
}

for (var i=0; i<10; i++) {
  var blueValue =  i * 20;
  for(var j=0; j<6; j++) {
    var redValue =  j * 40;
    b.fill( b.color(redValue,0,blueValue) );
    var rectangle = b.rect(j*100, i*100, 80, 80);
    b.opacity(rectangle, i * 5);
  }
}

b.fill(0);
var shape = [b.ellipse(100,100,100,100), b.rect(100,100,100,100), b.line(10,10,100,100)];

for(var i=0; i<20; i++) {  
  b.fill(0);
  var x = b.random(0, b.width-100);
  var y = b.random(0, b.height-100);
  var x2 = b.random(0, b.width-100);
  var y2 = b.random(0, b.height-100);
  var width = b.random(0, 100);
  var height = b.random(0, 100);
  var randomShape = b.random(0, shape.length);
  var randomShapeRounded = b.floor(randomShape);
  b.text(shape[randomShapeRounded], x, y, 100, 100);
  b.fill(b.random(0,100));
  b.ellipse(x2, y2, width, height);
}

} 

b.go();
