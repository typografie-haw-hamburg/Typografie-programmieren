// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.noStroke();

  var red = b.color(255, 0, 0);
  var blue = b.color(0, 0, 255);

  var randomColors = [];
  for (var i = 0; i < 10; i++) {
    randomColors.push(b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255)));
  }


  b.fill(b.gradient(randomColors,"RandomCol"));
  b.ellipse(b.width-b.width/2, b.height-b.height/2,70, 70);
}

b.go();
