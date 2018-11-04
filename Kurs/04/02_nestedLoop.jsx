// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  noFill();


  for (var j = 0; j < 6; j++) {

    var startX = random(width);
    var startY = random(height);

    var value = random(0, 10);

    if(value < 5) {
      stroke(255, 0, 0);
    } else {
      stroke(0, 0, 255);
    }

    var xDir = random(-2, 2);
    var yDir = random(-2, 2);

    for (var i = 0; i < 100; i++) {
      ellipse(startX + xDir * i, startY + yDir * i, 50, 50);
    }

  }


}
