// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


function draw() {

b.noStroke()
  b.clear( b.doc() );
  b.units( b.MM );
  b.rectMode(b.CENTER);

   var red1 = b.random (150,255);
    var blue1= b.random (150,255);
    var green1 = b.random (150,255)
    var red2= b.random (150,255);
    var green2= b.random (150,255);
    var blue2 = b.random (150,255);
var randomnumber = b.random (50, 200);

  for(var i = 0; i < randomnumber; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random (5, 150);
    var opacity = b.random(0,70);

if (y< b.height/2) {
  b.fill(red1, green1, blue1);

}

else {
 b.fill(red2, green2, blue2);
}
var ellipse = b.ellipse ( x, y, size, size);
    b.opacity (ellipse, opacity)

b.fill (255, 255, 255);
b.rect (x,y, size/2,size/2);



}

}

b.go();