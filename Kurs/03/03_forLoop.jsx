// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );
  noStroke();

  var y = 50;

  for(var i = 0; i < 10; i++) {

    ellipse(i * 20, i * 20, 15, 15);

  }

}
