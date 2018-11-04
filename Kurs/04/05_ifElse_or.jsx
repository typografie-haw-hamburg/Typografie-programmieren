// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  for(var i = 0; i < 30; i++) {

    var x = random(width);
    var y = random(height);

    fill(0, 0, 255);

    // wenn x im linken Drittel ODER im rechten Drittel ist
    if(x < width / 3  ||  x > width / 3 * 2) {
      fill(255, 0, 0);
    }

    ellipse(x, y, 30, 30);
  }

}
