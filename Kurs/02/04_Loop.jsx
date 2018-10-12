// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  for ( var i = 0; i < 20; i++ ) {

    var x = random(0, width);
    var y = random(0, height);

    println(i);

    ellipse(x, y, 20, 20);
  }

}
