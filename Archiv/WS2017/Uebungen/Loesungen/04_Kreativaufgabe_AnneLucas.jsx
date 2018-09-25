// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.clear( b.doc() );
  b.units(b.MM);

b.fill(135,206,250);
b.rect(0, 0, b.width, b.height);

b.noStroke();
b.fill(119,136,153);
b.rect(0, 0, b.width, 20);
b.rect(0, 0, 20, b.height);
b.rect(b.width-20, 0, 20, b.height);
b.rect(0, b.height-20, b.width, 20);

for(var i = 0; i < 25; i++){

  b.fill(250,128,114);
  b.textFont("Phosphate ","Inline");
  b.textSize(100);
  b.text("SILENCE",25 + i, 40 + 5*i, b.width  ,100);

  }

b.fill(0);
b.textSize(150);
b.text("SILENCE", 2, 230, b.width, 100);

}

b.go();
