﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
//var colors = [b.color();]

// for (var i=0; i<10; i++) {
//   var redValue = i * 20;
//   for(var j=0; j<5; j++) {
//     var blueValue = j * 40;
//     b.fill( b.color(redValue,0,blueValue) );
//     var ellipse = b.ellipse(j*100, i*100, 80, 80);
//     b.opacity(ellipse, 70 - i * 5);
//   }
// }

// for (var i=0; i<10; i++) {
//   var blueValue =  i * 20;
//   for(var j=0; j<6; j++) {
//     var redValue =  j * 40;
//     b.fill( b.color(redValue,0,blueValue) );
//     var rectangle = b.rect(j*100, i*100, 80, 80);
//     b.opacity(rectangle, i * 5);
//   }
// }

b.fill(0);
var bodyPart = ["ankle", "arm", "back", "belly", "bottom", "breast", "buttocks", "calf", "cheek", "chin", "ear", "elbow", "eye", "eyebrow", "eyelash", "finger", "fist", "foot", "forearm", "forehead", "hair", "hand", "head", "hip", "knee", "leg", "lip", "lower leg", "mouth", "neck", "nose", "nostril", "shoulder", "thigh", "thumb", "toe", "tongue", "tooth", "upper arm", "waist", "wrist"]; 

for(var i=0; i < bodyPart.length; i++) {
  b.fill(b.color(0));
  b.textFont("Bebas Neue");
  b.textSize(25);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN );
  var stepX = b.width / (bodyPart.length-1);
  var stepY = b.height / (bodyPart.length-1);
  var randomBodyPart = b.random(0, bodyPart.length);
  var randomBodyPartRounded = b.floor(randomBodyPart);

  if(b.startsWith(bodyPart[randomBodyPartRounded], "e")) {
    b.fill(b.color(255,0,0));
    b.textSize(10);
  }

  b.text(bodyPart[randomBodyPartRounded], (i-0.5)*stepX, (i-0.3)*stepY, 80, 20);
}

for(var i=0; i<10; i++){
  var posX = b.random(0, b.width);
  var width = b.random(2, 20);
  var height = b.random(5, b.height/2);
  var rectangle = b.rect(posX, b.height-height, width, height);
  b.opacity(rectangle, b.random(10,80));
}

for(var i=0; i<5; i++){
  var posX = b.random(0, b.width);
  var width = b.random(2, 20);
  var height = b.random(5, b.height/2);
  var rectangle = b.rect(posX, 0, width, height);
  b.opacity(rectangle, b.random(10,80));
}

} //draw

b.go();
