// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );
  rectMode(CENTER);

  for(var i = 0; i < 40; i++) {
    var x = random(width);
    var y = random(height);

    if(x > width / 2) {
      fill(255, 0, 0);
      ellipse(x, y, 25, 25);
    } else {
      fill(0, 0, 255);
      ellipse(x, y, 25, 25);
    }
  }

}
