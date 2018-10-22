// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );
  noStroke();

  var count = prompt("Anzahl der Kreise:", 8);

  var gaps = count - 1;
  var gapHeight = height / gaps;
  var gapWidth = width / gaps;

  for(var i = 0; i < count; i++) {

    ellipse(i * gapWidth, i * gapHeight, 25, 25);

  }

}
