// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Problem: Das Script schreibt mir nicht die 4 Seiten

function draw() {


  b.clear(b.doc());
  b.noFill();

  var pageCount = 4;
  var lineCount = 16;

  // Loop 1: Seitenanzahl
  for (var j = 0; j < pageCount; j++) {

      // in der ersten Runde müssen wir keine neue Seite hinzufügen, denn die erste Seite ist schon vorhanden
    if(j > 0) {
      b.addPage();
    }

    // Loop 2: zeichnet 16 Linien von Oben nach unten
    for(var i = 0; i < lineCount; i++) {

              // 1. Zufalls-Rotation = Horizontal
      var randomradius = b.random(0, 90);
      b.rotate(b.radians(randomradius));

              // 2.Zufalls-Linienstärke = Horizontal
      b.strokeWeight(b.random(5, 40));


      // Loop 3: Macht das Muster und verdoppelt alles um 11

        // mit jedem Loop, den wir vorher machen, werden 17 Linien gezeichnet
        // die Horizontale (xKoordinate) wird mit j (11 Linien) gesteuert
        // die Vertikale (y) wird mit i gesteuert (16),
        // Zahl die Multipliziert wird = Abstand (var distance)
      for (var j = 0; j < 11; j++) {

        var lineStart = 30; // Koordinate für den Anfang der Linie
        var lineEnd = 60; // Koordinate für das Ende der Line

        var distance = 50;

        b.line(lineStart + j * distance, 50 + i * distance, lineEnd + j * distance, 50 + i * distance);
      }
    }
  }
}

b.go();
