// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  rectMode( CENTER );
  noStroke();

  var startY = 25;

  for (var i = 0; i < 10; i++) {

    fill(i * 25, 0, 0);

    if(i < 5) {
      rect(i * 5 + 50, startY + i * 25, 20 + i * 10 + 20, 20);
    } else {
      ellipse(i * 5 + 50, startY + i * 25, 20 + i * 10 + 20, 20);
    }

  }

}
