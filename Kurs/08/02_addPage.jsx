// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  revert();

  // InDesign Scripting Befehl, um Dokument auf Einzelseiten zu stellen
  doc().documentPreferences.facingPages = false;

  var pages = 5;

  for(var i = 0; i < pages; i++) {

    for(var j = 0; j < 10; j++) {

      var x = random(width);
      var y = random(height);
      var dia = random(10, 40);

      ellipse(x, y, dia);
    }

    addPage();

  }

  // eine Seite wurde zu viel hinzugefügt, diese wird wieder entfernt
  removePage();

}