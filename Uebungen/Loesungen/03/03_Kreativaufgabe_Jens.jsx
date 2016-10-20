//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear( b.doc() ); // clears previous output, helpful during this tutorial

  // Start: Dokumentvoreinstellungen
  
  //General
    b.units(b.MM);
    b.colorMode(b.RGB);
    b.doc().documentPreferences.facingPages = false;
  //Page
     b.bleeds(2);
     b.margins(10);
   //Stroke
     b.stroke(0);
     b.strokeWeight(0.5);
     //b.noStroke();
   //Fill
     b.fill(0);
     //b.noFill();
   //Modes
     b.rectMode(b.CENTER);
     b.ellipseMode(b.CENTER);
   //Text
     b.textFont("Helvetica", "Bold"); 
     b.textTracking(0);
     b.textSize(20);
     b.textAlign(Justification.LEFT_ALIGN);

  //General Variables
    var halfX = b.width/2;
    var halfY = b.height/2;
    var myCounter = 20;
    var myColor = b.color(b.random(255), b.random(255), b.random(255));
    var myScale = 5;

  //show date in console
    b.println( 
      b.nf(b.day()) + "." 
      + b.month() + "." 
      + b.year() + ", " 
      + b.hour() + ":" 
      + b.nf(b.minute()) + " Uhr"
    );

  // Ende: Dokumentvoreinstellungen


  
  b.layer("creative");
  //(Kreativaufgabe) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll mindestens eine if()-Abfrage vorkommen. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).
  //Für die Dokumentation des Kurses ist es wichtig, dass wir unsere Dateien sammeln und online stellen. Das hat auch den Zweck, dass wir uns andere Scripts ansehen können, um zu sehen, wie andere ein bestimmtes Problem gelöst haben. Benennt das exportierte JPEG 03_Kreativaufgabe_EuerName.jpg und ladet es in diesen Google Drive-Ordner hoch. Ladet euer Script bitte mit der Benennung 03_Kreativaufgabe_EuerName.jsx in den entsprechenden GitHub-Ordner hoch (oben auf Upload files klicken, Script in das Fenster ziehen, unten mit Commit changes abspeichern).


  // Variablen, die die Anzahl von Zeilen und Spalten im Raster festlegen:
  var rowCount = 5;
  var marginCount = 5;

  var marginWidth = b.width / marginCount; // Breite einer Spalte = Breite des Dokuments / Anzahl der Spalten
  var rowHeight = b.height / rowCount; // Höhe einer Zeile = Höhe des Dokuments / Anzahl der Zeilen
  var myCounter = 20; // Anzahl der Zickzack-Wiederholungen


  b.noFill();

  for (var marginI = 1; marginI <= marginCount; marginI++) { //Loop Start: Pro Iteration wird eine Spalte gezeichnet

    for (var rowI = 0; rowI < rowCount; rowI++) { //Loop Start: Pro Iteration wird ein Zickzack in ein Rasterfeld gezeichnet

      var myTime = b.round( b.millisecond() ); // myTime = gerundete aktuelle Millisekunde

      if (myTime % 2 == 0) {//"Modulo", überprüft, ob "myTime" gerade oder ungerade ist.

        b.beginShape(b.OPEN); // Zeichnet horizontales Zickzack (Z-Form)
          for (var i = 0; i < myCounter; i++) { //Loop Start
            b.vertex(0, rowHeight / myCounter * i); // Höhe der Zeile / Anzahl der voreingestellten Zickzacks x Loop-Iteration (Dadurch das die Zickzack-Anzahl und die Loop-Wiederholungen beide durch "myCounter" bestimmt werden, wird die gesamte Zeilenhöhe mit Zickzacks gefüllt)
            b.vertex(marginWidth, rowHeight / myCounter * i); // Zeichnet den jeweiligen Zickzackpunkt auf der gegenüberliegenden Seite des Rasterfelds
          } //Loop End
        b.endShape();

      } else {

        b.beginShape(b.OPEN); // Zeichnet vertikales Zickzack (N-Form) - Erläuterung siehe oben
          for (var i = 0; i < myCounter; i++) { //Loop Start
            b.vertex(marginWidth / myCounter * i, 0);
            b.vertex(marginWidth / myCounter * i, rowHeight);
          } //Loop End
        b.endShape();

        // Zusätzlich wird, nachdem ein N-Form-Zickzack gezeichnet wurde manchmal noch ein Z-Form-Zickzack darüber gezeichnet:
        var rollDice = b.round( b.random( 1, 6 ) ); // Roll einen Würfel

        if(rollDice <= 3) { // Wenn der Würfel 3 oder höher zeigt ...
          b.beginShape(b.OPEN); // Zeichne ein horizontales Zickzack (Z-Form)
            for (var i = 0; i < myCounter; i++) { //Loop Start
              b.vertex(0, rowHeight / myCounter * i);
              b.vertex(marginWidth, rowHeight / myCounter * i);
            } //Loop End
          b.endShape();
        }

      }

      b.translate(0, rowHeight); // Sorgt dafür, dass das nächste Zickzack innerhalb des "row-Loops" eine Zeilenhöhe tiefer gezeichnet wird
    } //Loop End: Jetzt ist die erste Spalte fertig

    b.resetMatrix(); // Setze alle vorherigen "translate"-Einstellungen zurück
    b.translate(marginWidth * marginI, 0); // Sorgt dafür, dass die nächste Spalte eine Spaltenbreite weiter rechts gezeichnet wird
  } //Loop End


};

b.go();
