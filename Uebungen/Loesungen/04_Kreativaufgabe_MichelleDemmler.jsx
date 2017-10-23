// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";




function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.size(100, 100);
b.noStroke()

var x2 = b.random (-20, 5);
var y2 = b.random (-5, 15);

for (var i = 0; i < 50; i++) {
var R = b.random (100,255);
var G = b.random (100,255);
var B = b.random (200,255);
var x = b.random (0, b.width);
var y = b.random (0, b.height);
var size = b.random (10,30);

b.fill (R, G, B);

  b.textSize (100+(i*2));
 b.textAlign(Justification.LEFT_ALIGN);
 b.text("OK " ,x2 ,y2 ,100 ,100);
 b.textSize (15+(i*2));
 b.text(" WOW" ,x2 ,(y2+48) ,300 ,100);
  var ellipse= b.ellipse (x,y,size,size)
 b.blendMode(ellipse, BlendMode.OVERLAY   );







}




}
b.go();