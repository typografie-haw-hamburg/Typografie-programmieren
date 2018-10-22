// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  var count = prompt("Anzahl der Linien:", 8);
  var gaps = count - 1;
  var step = height / gaps;

  for(var i = 0; i < count; i++) {
    line(0, height - i * step, width, i * step);
  }

  noStroke();
  fill(255);
  ellipse(width / 2, height / 2, 50, 50);

}
