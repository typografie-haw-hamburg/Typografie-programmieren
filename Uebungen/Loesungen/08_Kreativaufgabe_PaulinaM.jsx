function draw() {
clear(doc());

var r1 = random(0, 255);
var g1 = random(0, 255);
var b1 = random(0, 255);

var r2 = random(0, 255);
var g2 = random(0, 255);
var b2 = random(0, 255);

var farbe1 = color(r1, g1, b1);
var farbe2 = color(r2, g2, b2);

fill(gradient(farbe1, farbe2));

rect(0, 0, width, height);



}