// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
  b.units( b.MM );

  b.noStroke();

b.fill(204, 236, 239);
b.rect(0, 0, b.width, b.height);

  for(var i = 0; i < 200; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random(20, 30);

    var distance = b.dist(x, y, b.width / 2, b.height / 2);


    if( distance < 100) {

    var color1 = b.color(191, 213, 232);
    var color2 = b.color(253, 222, 238);
    var gradient = b.gradient(color1, color2);

      b.fill(gradient);
    } else {

    var color1 = b.color(251, 182, 209);
    var color2 = b.color(148, 168, 208);
    var gradient = b.gradient(color1, color2);

      b.fill(gradient);
    }

    b.rect(x, y, size, size);
    b.ellipse(x, y, size, size);

  }


}

b.go();
