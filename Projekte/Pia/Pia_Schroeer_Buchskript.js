// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

 b.clear(b.doc());
  b.units(b.MM);

  //CSV Datei als String reinladen
  var diaryString = b.loadString("dez_reporter-export.csv");

  //String wird in einen Array umgewandelt
  var data = b.CSV.decode(diaryString);

  //Anzahl der Zeilen
  var laenge = data.length;

  //Erstellt einen Array mit 31 Feldern, also gleich Anzahl der Tage
  var daten = new Array(31);

  //Für jedes Feld/Tag werden momentan vier Eigenschaften(new Array(4)) aus der Tabelle hinzugefügt
  for (var j = 0; j < daten.length; ++j) {
    daten[j] = new Array(4);
    daten[j]["Anzahl"] = 0;
    daten[j]["Gedanken"] = "";
    daten[j]["reporttime"] = "";
    daten[j]["Ort"] = "";
  }

  //Ich gehe die CSV Datei durch, also die Anzahl der ZEILEN
  for (var i = 0; i < data.length; ++i) {
    //Ließt den Tag aus der Spalte timestamp aus
    daten[parseInt(data[i].timestamp.substring(8,10))-1]["Anzahl"]++;
    daten[parseInt(data[i].timestamp.substring(8,10))-1]["Gedanken"] += data[i].reporttime + " " + data[i].Ort + " " + data[i].Gedanken + " ";
  }

  //ANFANG

  var myColor = b.color(10, 20, 30, "blackmagic");
  b.fill(myColor);
  b.textFont('Maison Neue TRIAL','Bold');
  b.textSize(40);

  //Seite 1
  b.text("Ich bin der Schmutztitel", 20, 20, 300, 500);
  b.addPage();
  b.addPage();

  //Seite 3
  b.text("Ich bin der Titel", 20, 20, 300, 500);

  b.addPage();
  b.addPage();

  //Seite 5
  b.text("Ich bin das Inhaltsverzeichnis", 20, 20, 300, 500);

  b.addPage();
  b.addPage();

  //Seite 7
  b.text("Ich bin das Vorwort", 20, 20, 300, 500);

  b.addPage();
  b.addPage();

  //Anzahl der Tage (Später 31)
  var date = 2;
  
  //Hauptschleife
  for (var i = 0; i < date; i++) {

    //Seite 9  
    b.text(i+1 + ".12.", 20, 20, 300, 500);

    //1.GEDANKEN

    b.canvasMode(b.FACING_PAGES);
    b.addPage();
    b.addPage();

    //Textframe mit Gedanken aus CSV erstellen, dann die Textgröße an den Textrahmen anpassen
    var firstTextFrame = b.text(daten[i]["Gedanken"], 10, 10, b.width-20, b.height-20);
    var pointSize = firstTextFrame.parentStory.pointSize;

    while( firstTextFrame.overflows == false ) {
      pointSize++;
      b.typo(firstTextFrame, "pointSize", pointSize);
    }
    while( firstTextFrame.overflows == true ) {
      pointSize--;
      b.typo(firstTextFrame, "pointSize", pointSize);
    }

    //2.FOTOS

    b.addPage();
    b.addPage();

    b.text("Pictures made today: ", 20, 20, 300, 500);
   
   var lineCount = 16
    for (var j = 0; j < lineCount; j++) {
      b.line((b.width/lineCount)*j,0,(b.width/lineCount)*j,b.height);
      b.line(0,(b.height/lineCount)*j,b.width,(b.height/lineCount)*j);
      b.strokeWeight(2);
    }

    //Alle Bilder aus einem Ordner reinladen, egal wie die heißen
    var pf = Folder("/Users/pia/Desktop/Dezember/dez_" + (i+1) + "/pictures");

    //Speichert alle Dateien in einem Array
    var foto = pf.getFiles();

    for (var j = 0; j < foto.length; j++) {

      if (b.endsWith(foto[j].toString(), ".PNG")) {
      var img = b.image(foto[j], 0, 0);
      var scale = b.random(0.2, 0.6);
      var imgWidth = b.itemWidth(img) * scale;
      var imgHeight = b.itemHeight(img) * scale;
      var x = b.random(b.width - imgWidth);
      var y = b.random(b.height - imgHeight);
      b.transformImage(img, x, y, imgWidth, imgHeight);
      var myTS = img.transparencySettings;
      myTS.dropShadowSettings.mode = ShadowMode.drop;
      }
      
      else if (b.endsWith(foto[j].toString(), ".JPG")) {
      var img = b.image(foto[j], 0, 0);
      var scale = b.random(0.2, 0.6);
      var imgWidth = b.itemWidth(img) * scale;
      var imgHeight = b.itemHeight(img) * scale;
      var x = b.random(b.width - imgWidth);
      var y = b.random(b.height - imgHeight);
      b.transformImage(img, x, y, imgWidth, imgHeight);
      var myTS = img.transparencySettings;
      myTS.dropShadowSettings.mode = ShadowMode.drop;
      }
    }

    b.addPage();
    b.addPage();
    //3.WHATSAPP

    b.text("Whatsapp", 20, 20, 300, 500);

    //var browser = b.loadString((i+1) + ".Dez.txt");
    var whatsapp = b.loadString("1.Dez_wa.txt");

    //Wird in Textrahmen ausgegeben und in Variablen gespeichert
    var whatsappframe = b.text(whatsapp, 20, 20, 400, 400);

    while( whatsappframe.overflows == false ) {
      pointSize++;
      b.typo(whatsappframe, "pointSize", pointSize);
    }
    while(whatsappframe.overflows == true ) {
      pointSize--;
      b.typo(whatsappframe, "pointSize", pointSize);
    }



    b.addPage();
    b.addPage();

    //4.BROWSERHISTORY

    //var browser = b.loadString((i+1) + ".Dez.txt");
    var browser = b.loadString("1.Dez.txt");

    //Wird in Textrahmen ausgegeben und in Variablen gespeichert
    var browserframe = b.text(browser, 20, 20, 400, 400);
    b.textFont('Maison Neue TRIAL','Mono');
    b.addPage();
    b.addPage();

    b.textFont('Maison Neue TRIAL','Bold');
    //5.MAILS

    b.text("Mails", 20, 20, 300, 500);

    var pf = Folder("/Users/pia/Desktop/Dezember/dez_" + (i+1) + "/mail");

    //Speichert alle Dateien in einem Array
    var mail = pf.getFiles();

    for (var j = 0; j < mail.length; j++) {
      if (b.endsWith(mail[j].toString(), ".pdf")) {
      b.image(mail[j],j*10,j*10);
      }
    }
  }
}


b.go();