// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myFile = file( "~/Downloads/WetterHamburg.csv" );
  var myString = loadString( myFile );

  CSV.delimiter(";");

  fill(200, 100, 100);
  noStroke();

  var data = CSV.decode( myString );

  for(var i = 0; i < data.length; i++) {

    var rg = map(data[i].Niederschlag * 1, 0, 5, 255, 0);
    var b = map(data[i].Niederschlag * 1, 0, 5, 0, 255);

    fill(rg, rg, b);

    rect(10 + i * 4, height / 2, 3, data[i].TempTagesmittel * -6);

  }

}