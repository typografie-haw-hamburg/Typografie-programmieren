//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.units(b.MM);


for(var i = 0; i < 40; i++) {

var pos1 = b.random(30, b.width-30);
var pos2 = b.random(30, b.height-30);


 b.line(pos1, pos2, b.width/2, b.height/2);

}

for(var i = 0; i < 20; i++) {

var pos1 = b.random(10, b.width-10);
var pos2 = b.random(10, b.height-10);



 b.line(pos1, pos2, b.width/2, b.height/2);

 b.ellipse(pos1, pos2, 10, 10);

}


}

b.go();
