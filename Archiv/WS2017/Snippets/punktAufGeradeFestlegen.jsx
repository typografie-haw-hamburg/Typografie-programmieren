// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {


  // Mit diesem Script wird ein beliebiger Punkt auf einer zuvor festgelegten oder auch zufällig generierten Geraden festgelegt.
  b.units( b.MM);
  b.clear( b.doc() );

  // Der Start- und Endpunkt der Geraden wird hier zufällig gewählt, kann aber auch festgelegt werden.
  var x0 = b.random(0, b.width);
  var y0 = b.random(0, b.height);
  var x1 = b.random(0, b.width);
  var y1 = b.random(0, b.height);


  // Geradengleichung, wie früher in der Schule
  var m = (y1 - y0) / (x1 - x0);
  var f = y0 - m * x0;

  // Daraus ergeben sich X und Y Wert eines Punktes auf der Geraden
  // Wenn Start- und Endpunkte der Linie fest gewählt werden, kann man auch einen festen X-Wert in die Variable punktMitteX eintragen.
  // Dieser muss dann zwischen punkt x0 und x1 liegen.

  var punktMitteX = b.random(x0, x1);
  var punktMitteY = m * punktMitteX + f;

  // Test
  b.line(x0, y0, x1, y1);
  b.noFill();
  b.ellipse(punktMitteX, punktMitteY, 5, 5);

}

b.go();
