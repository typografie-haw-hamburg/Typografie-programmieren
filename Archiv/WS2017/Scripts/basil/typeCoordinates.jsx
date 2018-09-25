// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// this script demonstrates how to collect anchor point coordinates of letters in InDesign

function draw() {

  b.clear(b.doc());

  // Anlegen eines Info-Objekts, das ein leeres Objekt für die bounds enthält und einen leeren Array für die Pfade
  var letterInfo = {
    bounds: {},
    paths: []
  };

  // Textrahmen erstellen
  b.textSize(72);
  var tf = b.text("A", 0, 0, 100, 100);


  // bounds speichern, damit man z.B. später den rechten Rand des Schriftkegels abrufen kann
  letterInfo.bounds = b.bounds(tf.characters[0]);


  // Textrahmen in Pfade umwandeln
  tf.createOutlines();

  // beim entstandenen Pfad wird der Befehl "Verknüpften Pfad lösen" abgerufen
  // falls der Pfad ein verknüpfter Pfad war (Buchstabe mit Punzen) wird er damit in seine Einzelteile zerlegt
  var myOutline = b.doc().pageItems[0];
  myOutline.releaseCompoundPath();

  // alle entstandenen Pfae werden in die Variable myPaths geladen
  var myPaths = b.doc().pageItems;

  // ein Loop ruft von jedem Pfad alle Punkte ab
  // von jedem Pfadpunkt wird ein Array mit dem linken, dem mittleren und dem rechten Ankerpunkt erstellt
  // das Format ist also [ [xl, yl], [x, y], [xr, yr] ]
  // diese Punktarrays werden wiederum in einem Array collectedPathPoints gesammelt
  // wenn dieser fertig geschrieben ist wird er im Array letterInfo.paths mit allen Pfaden des Buchstabens gespeichert
  //
  // die Schleife wird rückwärts durchlaufen, da die Punzen an erster Stelle im Dokument stehen. Auf diese Weise ist der Buchstabenumriss das erste Element im Array.
  for (var i = myPaths.length - 1; i >= 0; i--) {
    var collectedPathPoints = [];
    var myPathPoints = myPaths[i].paths[0].pathPoints;
    for (var j = 0; j < myPathPoints.length; j++) {
      collectedPathPoints.push( [myPathPoints[j].leftDirection, myPathPoints[j].anchor, myPathPoints[j].rightDirection] );
    }
    letterInfo.paths.push(collectedPathPoints);
  }

  // Resultat in die Konsole schreiben
  b.inspect(letterInfo);

  // Resultat als JSON-Datei abspeichern
  var exportString = b.JSON.encode(letterInfo);
  b.saveString("test.json", exportString);

}

b.go();
