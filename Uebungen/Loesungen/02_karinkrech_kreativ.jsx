// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.noStroke();

  for(var i=0;i<20;i++){
    var size=b.random(10,100)
    var x = b.random(size/2,b.width - size/2);
    var y = b.random(size/2,b.height - size/2);
    var red = b.random(0,255);
    var green = b.random(0,255);
    var blue = b.random(0,255);
    var randomColors = [
      b.color(red, green, blue),
      b.color(green, blue, red)
    ];

    b.fill(b.gradient(randomColors, "RandomGradient" + i));
    b.ellipse(x,y,size,size);
    //20 kreise
  }
}

b.go();
