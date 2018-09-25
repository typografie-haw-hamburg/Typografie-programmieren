// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.noStroke();


  var dataString = b.loadString( "WetterHamburg.csv" );

  b.CSV.delimiter(";");

  var data = b.CSV.decode( dataString );

  var xStep = b.width / (data.length - 1);


  for(var i = 0; i < data.length; i++) {

    var temp = data[i].TempTagesmax;

    var red = b.map(temp, 5, 20, 0, 255);
    var blue = b.map(temp, 5, -3, 0, 255);
    var rectHeight = b.map(  temp, 0, 20, 0, -100);

    b.fill(red, 0, blue);
    b.rect( i * xStep -1, 100, 2, rectHeight );

  }

}

b.go();
