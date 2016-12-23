//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.rectMode(b.CENTER);

    b.fill(b.color(0));
    b.rect(b.width/2,b.height/2,b.width,b.height);   

  for (var i = 0; i < 9; i++) {

    for (var j = 0; j < 80; j++) {

      b.rotate(b.radians(j*0.3));

      b.fill(b.color(255));

      b.rect(5+i*25,(-10)+j*4,35,4);

    }

  } 
  
}

b.go(); 
