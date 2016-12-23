//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.colorMode(b.CMYK);


// line One blue
b.stroke(93, 75, 0, 0);
var startOneX = b.width/22;
var startOneY = b.random( b.height/22, 2*b.height/3 );
var endOneX = 5 * b.width/22;
var endOneY = b.random( b.height/22, 2*b.height/3 );

for(var i = 0; i < 30; i = i + 5){
  b.line(startOneX, startOneY + i, endOneX, endOneY + i);
  }

// line One red
b.stroke(0, 95, 92, 0);  
for(var i = 0; i < 30; i = i + 5){
  b.line(startOneX, startOneY + 2.5 + i, endOneX, endOneY + 2.5 + i);
  }


// line Two red
var endTwoX = 10 * b.width/22;
var endTwoY = b.random( b.height/22, 2*b.height/3);

for(var i = 0; i < 30; i = i + 5){
  b.line(endOneX, endOneY + i, endTwoX, endTwoY + i);
  }

// line Two blue
b.stroke(93, 75, 0, 0);
for(var i = 0; i < 30; i = i + 5){
  b.line(endOneX, endOneY + 2.5 + i, endTwoX, endTwoY + 2.5 + i);
  }

// line Three red
b.stroke(0, 95, 92, 0);  
var endThreeX = 15 * b.width/22;
var endThreeY = b.random( b.height/22, 2*b.height/3 );

for(var i = 0; i < 30; i = i + 5){
  b.line(endTwoX, endTwoY + i, endThreeX, endThreeY + i);
  }

// line Three blue
 b.stroke(93, 75, 0, 0);
for(var i = 0; i < 30; i = i + 5){
  b.line(endTwoX, endTwoY + 2.5 + i, endThreeX, endThreeY + 2.5 + i);
  }

// line Four blue 
var endFourX = 21 * b.width/22;
var endFourY = b.random( b.height/22, 2*b.height/3 );

for(var i = 0; i < 30; i = i + 5){
  b.line(endThreeX, endThreeY + i, endFourX, endFourY + i);
}

// line Four special red
b.stroke(0, 95, 92, 0);  
var endFourXX = 21*b.width/22;
var endFourYY = b.random(b.height/22, 2*b.height/3);

for(var i = 0; i < 30; i = i + 5){
  b.line(endThreeX, endThreeY + 2.5 + i, endFourXX, endFourYY + 2.5 + i);
}

}
b.go();
