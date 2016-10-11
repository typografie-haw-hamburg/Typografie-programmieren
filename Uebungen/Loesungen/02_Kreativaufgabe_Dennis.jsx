//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.units(b.MM);


for(var i = 0; i < 100; i++) {

var x = b.random(0, b.width);
var y = b.random(0, b.height);


 b.line(x, y, b.width, b.height); }



for(var i = 0; i < 100; i++) {

var x = b.random(0, b.width);
var y = b.random(0, b.height);


 b.line(0, b.height, x, y); }


 for(var i = 0; i < 100; i++) {

var x = b.random(0, b.width);
var y = b.random(0, b.height);


 b.line(b.width, 0, x, y); }


  for(var i = 0; i < 100; i++) {

var x = b.random(0, b.width);
var y = b.random(0, b.height);


 b.line(x, y, 0, 0); }


for(var i = 0; i < 20; i++){

b.noFill();
b.strokeWeight(b.random(2, 8));
b.stroke(b.color(b.random(0,255) ,0, 0));

var randomWidth = b.random (10, b.width/2);
var randomHeight = b.random (10, b.height/2);

var x = b.random (0, b.width);
var y = b.random (0, b.height);

b.rect(x, y, randomWidth, randomHeight);

}

for(var i = 0; i < 50; i++){


b.fill(0,0,0);
var x = b.random (0, b.width);
var y = b.random (0, b.height);

b.ellipse(x, y, 5, 5);

}




}

b.go();