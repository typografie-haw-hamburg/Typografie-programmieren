// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

//  Beispielscript
//  Exportieren einer programmierten Bewegung mit Sinus-Funktion

function draw() {

  // Dokument leeren und einrichten
  b.clear(b.doc());
  b.units(b.MM);
  b.size(200, 200);

  // Anzahl der Frames, die exportiert werden
  var frames = 20;
  var angle = 0;
  var step = b.TWO_PI / frames;

  // Min und Max-Werte von der Eigenschaft, die verändert werden soll
  var min = -100;
  var max =  100;

  for (var i = 0; i < frames; i++) {

    // Sinus-Wert, geht von 0 bis 1, zurück auf -1 und dann wieder auf 0
    var sineValue = b.sin(angle);

    // der vorherige Sinus-Wert wird in einen Ausgabewert umgerechnet, der später bei der Eigenschaft eingesetzt werden soll
    var correctedValue = b.map(sineValue, -1, 1, min, max);

    // bei manchen Scripts, muss noch sichergestellt werden, dass der Ausgabewert nicht (annähernd) 0 ist
    // z.B. kann in InDesign kein Rechteck mit der Breite 0 gezeichnet werden
    // deshalb kann man zum Beispiel überprüfen, ob der Wert zwischen -0.1 und 0.1 liegt und wenn das der Fall ist 0.1 für den Ausgabewert einsetzen
    if(correctedValue > -0.1 && correctedValue < 0.1) {
      correctedValue = 0.1;
    }

    // der Wert wird eingesetzt
    b.rect(100, 75, correctedValue, 50);

    // der Winkel muss erhöht werden, damit sich der Sinus-Wert in der nächsten Runde verändert
    angle = angle + step;

    // das Resultat wird als png exportiert
    b.savePNG( "export/img_" + (i + 1) + ".png");

    // das Dokument wird geleert, damit im nächsten Loop-Durchlauf wieder ein neuer Frame erstellt werden kann
    b.clear(b.doc());
  }

}

b.go();
