//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.noStroke();

// gradient Kreis

var color1 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));
var color2 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));

b.fill(b.gradient(color1, color2));
b.ellipse(b.width / 2, b.height / 2, 100, 100);

// loop linien

b.fill(49, 130, 107);
b.stroke(255, 255, 255);
b.strokeWeight(2);

for(var i = 0; i < 23; i++) {

var xpos = b.random(20, b.width - 20);
var ypos = b.random(20, b.height - 20);


 b.line(xpos , ypos , b.width / 2, b.height / 2);

b.noStroke();
b.rect(xpos, ypos, 15, 15);
b.stroke(255, 255, 255);
b.strokeWeight(2);
}




}

b.go();