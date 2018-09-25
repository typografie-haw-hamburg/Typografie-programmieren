//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  // Dokument einrichten
  b.clear(b.doc());
  b.units(b.MM);
  b.size(200, 200);
  b.strokeWeight(0.5);
  b.noFill();

  // Maße
  var middleX = b.width / 2;
  var middleY = b.height / 2;
  var myDiameter = 160;
  var myRadius = myDiameter / 2;
  var counter = 35;

  // Kreis zeichnen
  b.ellipse(middleX, middleY, myDiameter, myDiameter);

  // Loop zeichnet jeweils zwei zufällige Punkte auf dem Rand des Kreises und verbindet sie
  for (var i = 0; i < counter; i++) {

    // Zufallswinkel
    var myAngle1 = b.random(b.TWO_PI);
    var myAngle2 = b.random(b.TWO_PI);

    // x- und y-Position der zufälligen Punkte ausrechnen
    var myCircleDotX1 = middleX + myRadius * b.cos(myAngle1); // Radius * cos(Angle) = X position of dot on circle
    var myCircleDotY1 = middleY + myRadius * b.sin(myAngle1); // Radius * sin(Angle) = Y position of dot on circle
    var myCircleDotX2 = middleX + myRadius * b.cos(myAngle2);
    var myCircleDotY2 = middleY + myRadius * b.sin(myAngle2);

    // Linie zeichnen. Die Ankerpunkte vom ersten Punkt werden in die Kreismitte gelegt, um einen Bogen zu erstellen
    b.beginShape();
      b.vertex(myCircleDotX1, myCircleDotY1, middleX, middleY, middleX, middleY);
      b.vertex(myCircleDotX2, myCircleDotY2);
    b.endShape();

  };

}

b.go();

