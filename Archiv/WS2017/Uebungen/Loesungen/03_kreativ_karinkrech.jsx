// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.noStroke();
  b.rectMode(b.CENTER);
  b.units(b.MM);

 // Postion of center
  var xCenter = b.width-b.width/2;
  var yCenter = b.height-b.height/2;
  // Background circle
  b.rect(xCenter, yCenter, b.width, b.height);

  // Color of smaller cirlces
  b.fill(0,255,0);

  for (var i = 0; i < 200; i++) {
    var xPos = b.random(0,b.width);
    var yPos = b.height-b.height/2 - b.width / 2 + b.random(0,b.width);
    var dist = b.dist(xCenter, yCenter, xPos, yPos);
    if (dist + 5 < b.width/2) {
      var ellipse = b.ellipse(xPos, yPos, 10, 10);
      b.opacity(ellipse, dist);
    } else {
      b.ellipse(xPos, b.random(b.width, b.height), 10, 10);
      b.fill(200,100,0);
    }
  }
  var rand = b.random(0,5);
  b.println(rand);
  if (rand > 3) {
    b.fill(255,0,0);
  }else{
    b.fill(0,0,255);


  b.fill(0,255,0);
}
  for (var i = 0; i < 10; i++) {
    var pos = 70 + 20*i;
    var width = 70+5*i;
    var opacity = i*5;
    var obj;

    if (i < 5 ) {
      obj = b.rect(b.width-b.width/2, pos, width, 70);
    } else {
      obj = b.ellipse(b.width-b.width/2, pos, width, 70)
    }
    b.opacity(obj, opacity);
  }
}

b.go();
