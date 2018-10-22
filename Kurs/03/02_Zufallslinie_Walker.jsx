// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  noFill();


  beginShape();

    var x = random(width);
    var y = random(height);

  for(var i = 0; i < 1000; i++) {

    var xOffset = random(-5, 5);
    var yOffset = random(-5, 5);

    x = x + xOffset;
    y = y + yOffset;

    vertex(x, y);
  }

  endShape();

}
