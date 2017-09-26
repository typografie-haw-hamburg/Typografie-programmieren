//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.noStroke();

var colors = [b.color(10, 20, 70), b.color(10, 43, 50), b.color(100), b.color(12, 43, 150), b.color(40, 60, 200), ];

for(var i = 0; i < 70; i++){


  for(var j = 0; j < 7; j++){

    


var random = b.random(0, colors.length);
var randomRounded = b.floor(   random   );

b.fill(colors[randomRounded]);

//b.ellipse(j * 70, i * 70, i * 10, j * 10);
b.rect(j * 10, i * 12, i * 25, i * 7);

}

}

}


b.go();
