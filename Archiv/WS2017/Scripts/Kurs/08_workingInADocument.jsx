//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  // ein Beispielscript, das verschiedene Seitenelemente über ein ganzes Dokument verteilt erstellt
  // und teilweise auf bereits erstellte Elemente zurückgreift.
  // Zur Nutzung von b.placeholder() muss die neuste basil.js-Version installiert sein:
  // https://github.com/basiljs/basil.js/blob/master/basil.js -> Über den Raw-Button oben downloaden

  b.close(false);

  // Erstellen der Ebenen Text und Grafik
  var textLayer = b.layer("Text");
  var graphicLayer = b.layer("Grafik");

  for(var j = 0; j < 10; j++) {

    // eine neue Seite hinzufügen (außer beim ersten Mal, eine Seite ist immer mindestens schon vorhanden)
    if(j != 0) {
      b.addPage();
    }

    for(var i = 0; i < 20; i++) {
      var x = b.random(b.width);
      var y = b.random(b.height);

      var size = b.random(5, 20);

      var ell = b.ellipse(x, y, size, size);
      ell.name = "Kreis " + (i + 1);

    }

    var runningText = b.text("", 50, 50, 200, 400);
    runningText.name = "Fließtext";
    runningText.itemLayer = textLayer;


    // ab Seite 2 den aktuellen Fließtextrahmen mit dem vorherigen verknüpfen
    if(j != 0) {
      b.linkTextFrames(prevRunningText, runningText)
    }


    var pageNo = b.text( b.pageCount() , b.width - 50, b.height - 50, 50, 50);
    pageNo.name = "Seitenzahl";
    pageNo.itemLayer = textLayer;


    b.typo(pageNo, "pointSize", 24);

    var prevRunningText = runningText;
  }


  for(var i = 1; i <= b.pageCount(); i++) {
    b.page(i);

    // auf ein bereits erstelltes Element über den Namen zugreifen
    var foundPageNo = b.nameOnPage("Seitenzahl");
    b.itemY(foundPageNo, 200);

    // auf Seiten mit gerader Seitenzahl wird das Element nach links verschoben
    if(i % 2 == 0) {
      b.itemX(foundPageNo, 0);
    }

  }

  // die verbundenen Fließtextrahmen mit Platzhaltertext füllen
  b.page(1);
  var firstRunningTextFrame = b.nameOnPage("Fließtext");
  b.placeholder(firstRunningTextFrame);

}

b.go();
