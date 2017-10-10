﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.addPage(b.AFTER);
b.units(b.MM);
b.noFill();


var black = b.color(0, 0, 0, "blackmagic");
b.fill(black);

b.rect(0, 0, b.width, b.height);

var white = b.color(255, 255, 255, "white");
b.fill(white);

for(var i = 0; i < 50; i++) {
  b.noStroke();
  var posX = b.random(10, b.width-10);
  var posY = b.random(10, b.height-30);
  var width = b.round(b.random(1, 5));
  b.println(width);
b.rect(posX, posY, width, 30);


if(width == 2) {
  b.strokeWeight(width);
  b.stroke(255, 255, 255, "white");
  b.line(posX+width/2, posY+31, b.width/2, b.height/2);
 
} 

if(width == 6) {
  b.strokeWeight(width);
  b.stroke(255, 255, 255, "white");
b.line(posX+width/2, posY+31, b.width/2, b.height/2);

} 

if(width == 8) {
  b.strokeWeight(width);
  b.stroke(255, 255, 255, "white");
 b.line(posX+width/2, posY+31, b.width/2, b.height/2);
} 

if(width == 4) {
  b.strokeWeight(width);
  b.stroke(255, 255, 255, "white");
  b.line(posX+width/2, posY+31, b.width/2, b.height/2);
 
}



}

} 


b.go();