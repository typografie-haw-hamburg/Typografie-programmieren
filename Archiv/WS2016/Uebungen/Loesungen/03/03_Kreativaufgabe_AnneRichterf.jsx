//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {



b.units(b.MM);
b.clear(b.doc());

b.beginShape(b.CLOSE);
b.colorMode(b.CMYK);
b.noStroke();
var rect = b.rect(0, 0, b.width, b.height);


for(var i = 0; i < 7; i ++){
  var x = 3+(i*(b.width/10));
  var y = 0;



b.stroke(9,100,9,9);
b.strokeWeight(6);
var random = b.random(4, b.height);

if (random < b.height/2){
var rect2 = b.rect(x, random, 50, 100);

b.strokeWeight(1);
b.vertex(x, random);
}

else {

b.strokeWeight(20);
b.line(b.width/2, b.height/2, x,y);
}

}
b.endShape();

}
b.go();
