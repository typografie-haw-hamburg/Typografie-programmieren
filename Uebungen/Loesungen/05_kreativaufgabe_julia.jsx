// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.noStroke();
b.fill(0);
b.rect(0,0,b.width,b.height);


for(var i = 0; i < b.width /10 -1; i++){


  for(var j = 0; j < b.height /10 -1; j++){


  b.fill(b.color (0, 0+j*3, 0 + i * b.width /21))
  b.rotate(j*0.1);
  b.rect(10 + i*10, 10 + j *10, 0.23, 30);

}

}

b.resetMatrix();
b.textFont("Block Berthold", "Heavy")
b.textSize(72);
b.text("motion", b.width/2, b.height/3, 100,50);
}

b.go();
