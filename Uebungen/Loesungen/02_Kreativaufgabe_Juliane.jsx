// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

clear(doc());

image('bild.png', 0, 0, width, height);

var color1 = color(random(0, 255), random(0, 255), random(0, 255));
var color2 = color(random(0, 255), random(0, 255), random(0, 255));
fill(gradient(color1, color2, "Verlauf"));

var color3 = color(random(0, 255), random(0, 255), random(0, 255));
var color4 = color(random(0, 255), random(0, 255), random(0, 255));
strokeWeight(4);
stroke(gradient(color3, color4, "VerlaufKontur"));


for (var i = 0; i < 16; i++) {

  var x = random(90, width-40);
  var y = random(50, height-40);


var kreis = ellipse(x, y, 60, 60);
opacity(kreis, 20);
var kreis = ellipse(x-5, y-5, 55, 55);
opacity(kreis, 30);
var kreis = ellipse(x-10, y-10, 45, 45);
opacity(kreis, 40);
var kreis = ellipse(x-15, y-15, 40, 40);
opacity(kreis, 60);
var kreis = ellipse(x-20, y-20, 35, 35);
opacity(kreis, 80);
var kreis = ellipse(x-25, y-25, 30, 30);
opacity(kreis, 100);


}


}






