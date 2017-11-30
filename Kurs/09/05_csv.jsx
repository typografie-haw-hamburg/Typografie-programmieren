// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // CSV-Datei als String laden
  var dataString = b.loadString( "WetterHamburg.csv" );

  // Trennzeichen festlegen, falls die Tabelle nicht mit Kommas getrennt ist
  b.CSV.delimiter(";");

  // in Datenobjekt umwandeln
  var data = b.CSV.decode( dataString );


  var xStep = b.width / (data.length - 1);

  for(var i = 0; i < data.length; i++) {

    // Wert aus der Spalte "TempTagesmax" auslesen
    var temp = data[i].TempTagesmax;

    var rectHeight = b.map(  temp, 0, 20, 0, -100);

    b.rect( i * xStep -1, 100, 2, rectHeight );

  }

}

b.go();
