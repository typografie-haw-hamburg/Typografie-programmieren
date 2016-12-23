//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.gradientMode( b.RADIAL );
b.clear(b.doc());

var randomcolor1 = b.color(b.round(b.random(0,255)), b.round(b.random(0,255)), b.round(b.random(0,255)));
var randomcolor2 = b.color(b.round(b.random(0,255)), b.round(b.random(0,255)), b.round(b.random(0,255)));
var randomcolor3 = b.color(b.round(b.random(0,255)), b.round(b.random(0,255)), b.round(b.random(0,255)));
var randomcolor4 = b.color(b.round(b.random(0,255)), b.round(b.random(0,255)), b.round(b.random(0,255)));
var randomcolor5 = b.color(b.round(b.random(0,255)), b.round(b.random(0,255)), b.round(b.random(0,255)));


b.stroke(randomcolor3);
b.strokeWeight(0.5);

b.fill(b.gradient(randomcolor3, randomcolor4, "base"));
b.noStroke();
b.rect(0,0,b.width,b.height);

b.gradientMode( b.LINEAR );
b.noStroke();
b.fill(b.gradient(randomcolor1, randomcolor2, "simple gradient"));
b.ellipse(b.width/2, b.height/2, 200, 200);

b.stroke(randomcolor5);

for(i=0; i<20; i++){

  var x = b.round(b.random(50, b.width/2-10));
  var y = b.round(b.random(50, b.height-50));
  var y2 = b.round(b.random(50, b.height-50));
  var x2 = b.width - x;
  var z = y - b.round(b.random(10,50));

  b.line(x, y, b.width/2, y2);
  b.line(b.width/2, y2, x2, y);
  b.line(x, y, b.width/2, z);
  b.line(b.width/2, z, x2, y);

}

}

b.go();
