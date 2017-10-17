// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.revert();
b.units(b.MM);

b.rect(0, 0, b.width, b.height);
b.rectMode(b.CENTER);
b.noFill();

for(var i = 0; i < 30; i++){
var rotate = b.random(23,100);

b.rotate(rotate);
b.rect(b.width / 2 , i + 130, i * 10, i * 10);
b.stroke(255 - (i * 10), 59, 247);

if(i < 10){
b.strokeWeight(5);

}else{
b.strokeWeight(i+3);

}

}
}

b.go();
