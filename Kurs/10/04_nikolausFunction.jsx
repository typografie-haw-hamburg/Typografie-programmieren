// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );
  noFill();

  drawHouse( 20, 45, 30, color(255, 0, 0), true );
  drawHouse( 100, height / 2, 80, color(0, 255, 0), false );
  drawHouse( 10, 250, 20, color(0, 0, 255), true );

}

function drawHouse( x, y, length, strokeColor, chimney ) {

  stroke( strokeColor );

  // Grundmauern + Diagonale
  rect(x, y, length, length);
  line(x, y, x + length, y + length);
  line(x, y + length, x + length, y);

  if(chimney === true) {
    // Kamin
    rect(x + length / 8, y - length / 2, length / 8, length / 2);
  }

  // Dach
  line(x, y, x + length / 2, y - length / 2);
  line(x + length / 2, y - length / 2, x + length, y);

}