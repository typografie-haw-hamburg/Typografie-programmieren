//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);

var z = b.random(5,20)

for(var i = 0; i < b.random(10,200); i++) {

  var pointX1 = b.random(0,b.width-z)
  var pointY1 = b.random(0,b.height-z)
  var pointX2 = pointX1+z
  var pointY2 = pointY1+z


  b.line(pointX1,pointY1,pointX2,pointY2);

  b.line(pointX1+z,pointY1,pointX2-z,pointY2)

}

b.stroke (255,0,0)

var pointA1 = b.random(0,b.width-z)
var pointB1 = b.random(0,b.height-z)
var pointA2 = pointA1+z
var pointB2 = pointB1+z

b.line(pointA1,pointB1,pointA2,pointB2);
b.line(pointA1+z,pointB1,pointA2-z,pointB2)

}



b.go();