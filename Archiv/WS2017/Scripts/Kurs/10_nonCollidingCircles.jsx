//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noFill();

  var circleCount = 5000;
  var timeout = 10000;

  var minRadius = 5;
  var maxRadius = 100;

  var prevCircles = [];

  for(var i = 0; i < circleCount; i++) {
    var x = b.random(b.width);
    var y = b.random(b.height);
    var radius = minRadius;

    var collision = false;

    // checks if circles collide
    for(var j = 0; j < prevCircles.length; j++) {
      var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y);
      var radii = radius + prevCircles[j].radius;

      if(distance < radii) {
        collision = true;
        break;
      }
    }

    // find closest circle
    var closest = maxRadius;
    for(var j = 0; j < prevCircles.length; j++) {
      var distance = b.dist(x, y, prevCircles[j].x, prevCircles[j].y) - prevCircles[j].radius;
      if(distance < closest) {
        closest = distance;
      }
    }

    radius = closest;

    // draws a new circle
    if(collision == false) {
      b.ellipse(x, y, radius * 2, radius * 2);

      var circle = {};
      circle.x = x;
      circle.y = y;
      circle.radius = radius;

      prevCircles.push(circle);
    }

    if(b.millis() > timeout) {
      break;
    }

  }

}

b.go();

