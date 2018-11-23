// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  for(var i = 0; i < 5; i++) {

    clear( doc() );

    for(var j = 0; j < 10; j++) {

      var x = random(width);
      var y = random(height);
      var dia = random(10, 40);

      ellipse(x, y, dia);
    }

    // Version 1: Datei neben InDesign-Dokument
    // savePDF( "test" + (i + 1) + ".pdf" );

    // Version 2: Dateiobjekt, InDesign Dokument muss nicht gespeichert sein
    var exportFile = file("~/Documents/basiljs/user/test" + (i + 1) + ".pdf");
    savePDF( exportFile );

  }

}