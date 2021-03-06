﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.noFill();
b.strokeWeight(0.5);

// **** DATEN ****

var cereal = b.loadString("cereal.csv");

b.CSV.delimiter(";");
var data = b.CSV.decode(cereal);

var step = 11;
var count = data.length;


for (var i = 0; i < count; i++) {
  var randomX = b.random(-40,40);
  var randomY = b.random(-40,40);
  b.ellipse(b.width/2 + randomX, b.height/2 + randomY, data[i].sugars * 50, data[i].sugars * 50);
}

b.textFont("Avenir Next", "Bold");
b.textSize(40);
b.colorMode(b.CMYK);
b.fill(b.color(24,0,0,41));
b.textAlign(Justification.CENTER_ALIGN);
//var randomY = b.random(0, b.height);
//var tf = b.text(data[i].name, i * step, randomY, 150, 20);
var tf = b.text("cereals", b.width/2-100, b.height-100, 200, 40);
b.typo(tf, 'capitalization', Capitalization.ALL_CAPS);





} //draw

b.go();
