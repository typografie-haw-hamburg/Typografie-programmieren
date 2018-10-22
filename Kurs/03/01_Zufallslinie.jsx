// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  noFill();

  beginShape();

  for(var i = 0; i < 100; i++) {

    var x = random(width);
    var y = random(height);

    vertex(x, y);
  }

  endShape();

}
