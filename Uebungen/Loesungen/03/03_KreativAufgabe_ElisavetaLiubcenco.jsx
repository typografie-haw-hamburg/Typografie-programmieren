//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() { 

b.clear(b.doc());

b.units(b.MM);

b.noFill();

for(var i = 0; i < 50; i++) {


b.stroke(255, 20, 20);


var x = b.random(0, b.width/2);
var y = b.random(0, b.height/2);

if(x < 5){

b.strokeWeight(b.random(2,10))

}

b.beginShape();
b.vertex(0, 0);
b.vertex(x, y);
b.vertex(100, 150);
b.vertex(x, y);
b.vertex(b.width , b.height);
b.endShape();




}





}

b.go();
