// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  for(var i = 0; i < 30; i++) {

    var x = random(width);
    var y = random(height);

    // erst mal Füllung auf rot setzen
    fill(255, 0, 0);

    // wenn rechts oben, dann cyan
    if( x > width / 2  &&  y < height / 2 ) {
      fill(0, 255, 255);
    }

    // wenn links unten, dann gelb
    if( x < width / 2  &&  y > height / 2) {
      fill(255, 255, 0);
    }

    ellipse(x, y, 30, 30);
  }


}
