// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.size(200, 50);
  b.noStroke();


  var dataString = b.loadString( "WetterHamburg.csv" );

  b.CSV.delimiter(";");

  var data = b.CSV.decode( dataString );

  var xStep = b.width / (data.length - 1);

  b.beginShape();

  for(var i = 0; i < data.length; i++) {

    var temp = data[i].TempTagesmax;

    var y = b.map(temp, -5, 20, b.height, 0);

    b.vertex( i * xStep, y );
    b.fill(255, 0, 0);
    b.ellipse( i * xStep, y, 1, 1);

  }

  b.stroke(0);
  b.strokeWeight(0.6);
  b.noFill();
  var curve = b.endShape();

  // neues basil-Feature, um Objekte nach vorne oder hinten anzuordnen
  // wenn hier ein Fehler auftritt, bitte die neuste basil-Version von der Typografie-Programmieren-Website runterladen
  b.arrange(curve, b.BACK);

}

b.go();
