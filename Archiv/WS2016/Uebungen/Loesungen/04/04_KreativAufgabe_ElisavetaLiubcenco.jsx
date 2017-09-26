//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.noStroke();

var colors = [b.color(0), b.color(50), b.color(100), b.color(150), b.color(200), ];

for(var i = 0; i < 10; i++){

  var redValue = i * 20;

  for(var j = 0; j < 7; j++){

    var blueValue = j * 30;


var random = b.random(0, colors.length);
var randomRounded = b.floor(   random   );

b.fill(colors[randomRounded]);

b.rect(j * 70, i * 70, i * 10, j * 10);

}

}

}


b.go();
